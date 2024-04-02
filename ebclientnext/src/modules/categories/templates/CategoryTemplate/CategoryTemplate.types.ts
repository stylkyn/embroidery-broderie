import { SortOptions } from '@modules/store/components/refinement-list/sort-products/types';
import { ProductCategoryWithChildren } from 'types/global';

export interface CategoryTemplateProps {
    categories: ProductCategoryWithChildren[];
    sortBy?: SortOptions;
    page?: string;
    countryCode: string;
}
