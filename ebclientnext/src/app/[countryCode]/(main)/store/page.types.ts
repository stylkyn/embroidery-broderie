import { SortOptions } from '@modules/store/components/refinement-list/sort-products/types';

export type Params = {
    searchParams: {
        sortBy?: SortOptions;
        page?: string;
    };
    params: {
        countryCode: string;
    };
};
