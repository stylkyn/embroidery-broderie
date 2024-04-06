import { SortOptions } from '@modules/store/components/RefinementList/SortProducts/types';
import { ProductCategoryWithChildren } from 'types/global';

export interface CategoryTemplateProps {
    categories: ProductCategoryWithChildren[];
    sortBy?: SortOptions;
    page?: string;
    countryCode: string;
}
