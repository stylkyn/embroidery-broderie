import { SortOptions } from '@modules/store/components/RefinementList/SortProducts/types';

export interface SearchResultsTemplateProps {
    query: string;
    ids: string[];
    sortBy?: SortOptions;
    page?: string;
    countryCode: string;
}
