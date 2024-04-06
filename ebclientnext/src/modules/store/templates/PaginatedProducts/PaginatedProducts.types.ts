import { SortOptions } from '@modules/store/components/RefinementList/SortProducts';

export interface PaginatedProductsParams {
    limit: number;
    collection_id?: string[];
    category_id?: string[];
    id?: string[];
}

export interface PaginatedProductsProps {
    sortBy?: SortOptions;
    page: number;
    collectionId?: string;
    categoryId?: string;
    productsIds?: string[];
    countryCode: string;
}
