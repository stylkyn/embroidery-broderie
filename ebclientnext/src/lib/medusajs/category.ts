import { ProductCategory } from '@medusajs/medusa';
import { cache } from 'react';

import { ProductCategoryWithChildren, ProductPreviewType } from 'types/global';

import { medusaClient } from '@lib/config';
import { getProductsList } from './product';

// Category actions
export const listCategories = cache(function () {
    const headers = {
        next: {
            tags: ['collections']
        }
    } as Record<string, any>;

    return medusaClient.productCategories
        .list({ expand: 'category_children' }, headers)
        .then(({ product_categories }) => product_categories)
        .catch((err) => {
            throw err;
        });
});

export const getCategoriesList = cache(async function (
    offset: number = 0,
    limit: number = 100
): Promise<{
    product_categories: ProductCategoryWithChildren[];
    count: number;
}> {
    const { product_categories, count } = await medusaClient.productCategories
        .list({ limit, offset }, { next: { tags: ['categories'] } })
        .catch((err) => {
            throw err;
        });

    return {
        product_categories,
        count
    };
});

export const getCategoryByHandle = cache(async function (
    categoryHandle: string[]
): Promise<{
    product_categories: ProductCategoryWithChildren[];
}> {
    const handles = categoryHandle.map((handle: string, index: number) =>
        categoryHandle.slice(0, index + 1).join('/')
    );

    const product_categories = [] as ProductCategoryWithChildren[];

    for (const handle of handles) {
        // eslint-disable-next-line no-await-in-loop
        const category = await medusaClient.productCategories
            .list(
                {
                    handle: handle
                },
                {
                    next: {
                        tags: ['categories']
                    }
                }
            )
            .then(({ product_categories: { [0]: category } }) => category)
            .catch((err) => {
                return {} as ProductCategory;
            });

        product_categories.push(category);
    }

    return {
        product_categories
    };
});

export const getProductsByCategoryHandle = cache(async function ({
    pageParam = 0,
    handle,
    countryCode
}: {
    pageParam?: number;
    handle: string;
    countryCode: string;
    currencyCode?: string;
}): Promise<{
    response: { products: ProductPreviewType[]; count: number };
    nextPage: number | null;
}> {
    const { id } = await getCategoryByHandle([handle]).then(
        (res) => res.product_categories[0]
    );

    const { response, nextPage } = await getProductsList({
        pageParam,
        queryParams: { category_id: [id] },
        countryCode
    })
        .then((res) => res)
        .catch((err) => {
            throw err;
        });

    return {
        response,
        nextPage
    };
});
