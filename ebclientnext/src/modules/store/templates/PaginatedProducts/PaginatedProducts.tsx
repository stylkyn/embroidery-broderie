import { getProductsListWithSort, getRegion } from '@lib/medusajs';
import { ProductPreview } from '@modules/products';
import { Pagination } from '@modules/store';
import {
    PaginatedProductsParams,
    PaginatedProductsProps
} from './PaginatedProducts.types';
import { PRODUCT_LIMIT } from './PaginatedProducts.consts';

export const PaginatedProducts = async ({
    sortBy,
    page,
    collectionId,
    categoryId,
    productsIds,
    countryCode
}: PaginatedProductsProps) => {
    const region = await getRegion(countryCode);

    if (!region) {
        return null;
    }

    const queryParams: PaginatedProductsParams = {
        limit: PRODUCT_LIMIT
    };

    if (collectionId) {
        queryParams['collection_id'] = [collectionId];
    }

    if (categoryId) {
        queryParams['category_id'] = [categoryId];
    }

    if (productsIds) {
        queryParams['id'] = productsIds;
    }

    const {
        response: { products, count }
    } = await getProductsListWithSort({
        page,
        queryParams,
        sortBy,
        countryCode
    });

    const totalPages = Math.ceil(count / PRODUCT_LIMIT);

    return (
        <>
            <ul className="grid grid-cols-2 w-full small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8">
                {products.map((p) => {
                    return (
                        <li key={p.id}>
                            <ProductPreview
                                productPreview={p}
                                region={region}
                            />
                        </li>
                    );
                })}
            </ul>
            {totalPages > 1 && (
                <Pagination page={page} totalPages={totalPages} />
            )}
        </>
    );
};
