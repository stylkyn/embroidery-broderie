import { SortOptions } from '@modules/store/components/refinement-list/sort-products/types';

export type Params = {
    params: { query: string; countryCode: string };
    searchParams: {
        sortBy?: SortOptions;
        page?: string;
    };
};
