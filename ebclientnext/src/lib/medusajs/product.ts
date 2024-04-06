import { StoreGetProductsParams } from '@medusajs/medusa';
import { PricedProduct } from '@medusajs/medusa/dist/types/pricing';
import { cache } from 'react';

import sortProducts from '@lib/util/sort-products';
import transformProductPreview from '@lib/util/transform-product-preview';
import { ProductPreviewType } from 'types/global';

import { medusaClient } from '@lib/config';
import { getMedusaHeaders } from './base';
import { getRegion } from './region';
import { SortOptions } from '@modules/store/components/RefinementList/SortProducts/types';
import {
    getCollectionsList,
    getProductsByCollectionHandle
} from './collection';

const emptyResponse = {
    response: { products: [], count: 0 },
    nextPage: null
};

// Product actions
export const getProductsById = cache(function ({
    ids,
    regionId
}: {
    ids: string[];
    regionId: string;
}) {
    const headers = getMedusaHeaders(['products']);

    return medusaClient.products
        .list({ id: ids, region_id: regionId }, headers)
        .then(({ products }) => products)
        .catch((err) => {
            // eslint-disable-next-line no-console
            console.error(err);

            return null;
        });
});

export const retrievePricedProductById = cache(function ({
    id,
    regionId
}: {
    id: string;
    regionId: string;
}) {
    const headers = getMedusaHeaders(['products']);

    return medusaClient.products
        .retrieve(`${id}?region_id=${regionId}`, headers)
        .then(({ product }) => product)
        .catch((err) => {
            // eslint-disable-next-line no-console
            console.error(err);

            return null;
        });
});

export const getProductByHandle = cache(async function (
    handle: string
): Promise<{ product: PricedProduct }> {
    const headers = getMedusaHeaders(['products']);

    const product = await medusaClient.products
        .list({ handle }, headers)
        .then(({ products }) => products[0])
        .catch((err) => {
            throw err;
        });

    return { product };
});

export const getProductsList = cache(async function ({
    pageParam = 0,
    queryParams,
    countryCode
}: {
    pageParam?: number;
    queryParams?: StoreGetProductsParams;
    countryCode: string;
}): Promise<{
    response: { products: ProductPreviewType[]; count: number };
    nextPage: number | null;
    queryParams?: StoreGetProductsParams;
}> {
    const limit = queryParams?.limit || 12;

    const region = await getRegion(countryCode);

    if (!region) {
        return emptyResponse;
    }

    const { products, count } = await medusaClient.products
        .list(
            {
                limit,
                offset: pageParam,
                region_id: region.id,
                ...queryParams
            },
            { next: { tags: ['products'] } }
        )
        .then((res) => res)
        .catch((err) => {
            throw err;
        });

    const transformedProducts = products.map((product) => {
        return transformProductPreview(product, region!);
    });

    const nextPage = count > pageParam + 1 ? pageParam + 1 : null;

    return {
        response: { products: transformedProducts, count },
        nextPage,
        queryParams
    };
});

export const getProductsListWithSort = cache(
    async function getProductsListWithSort({
        page = 0,
        queryParams,
        sortBy = 'created_at',
        countryCode
    }: {
        page?: number;
        queryParams?: StoreGetProductsParams;
        sortBy?: SortOptions;
        countryCode: string;
    }): Promise<{
        response: { products: ProductPreviewType[]; count: number };
        nextPage: number | null;
        queryParams?: StoreGetProductsParams;
    }> {
        const limit = queryParams?.limit || 12;

        const {
            response: { products, count }
        } = await getProductsList({
            pageParam: 0,
            queryParams: {
                ...queryParams,
                limit: 100
            },
            countryCode
        });

        const sortedProducts = sortProducts(products, sortBy);

        const pageParam = (page - 1) * limit;

        const nextPage = count > pageParam + limit ? pageParam + limit : null;

        const paginatedProducts = sortedProducts.slice(
            pageParam,
            pageParam + limit
        );

        return {
            response: {
                products: paginatedProducts,
                count
            },
            nextPage,
            queryParams
        };
    }
);

export const getHomepageProducts = cache(async function getHomepageProducts({
    collectionHandles,
    currencyCode,
    countryCode
}: {
    collectionHandles?: string[];
    currencyCode: string;
    countryCode: string;
}) {
    const collectionProductsMap = new Map<string, ProductPreviewType[]>();

    const { collections } = await getCollectionsList(0, 3);

    const finalCollections =
        collectionHandles ?? collections.map((collection) => collection.handle);

    for (const handle of finalCollections) {
        // eslint-disable-next-line no-await-in-loop
        const products = await getProductsByCollectionHandle({
            handle,
            currencyCode,
            countryCode,
            limit: 3
        });
        collectionProductsMap.set(handle, products.response.products);
    }

    return collectionProductsMap;
});
