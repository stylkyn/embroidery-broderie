import { ProductCollection } from '@medusajs/medusa';
import { SortOptions } from '@modules/store/components/RefinementList/SortProducts/SortProducts.types';

export interface CollectionTemplateProps {
    sortBy?: SortOptions;
    collection: ProductCollection;
    page?: string;
    countryCode: string;
}
