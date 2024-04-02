import { ProductCollection } from '@medusajs/medusa';
import { SortOptions } from '@modules/store/components/refinement-list/sort-products/types';

export interface CollectionTemplateProps {
    sortBy?: SortOptions;
    collection: ProductCollection;
    page?: string;
    countryCode: string;
}
