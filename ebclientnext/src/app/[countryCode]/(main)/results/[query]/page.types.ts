import { SortOptions } from '@modules/store/components/RefinementList/SortProducts/SortProducts.types';

export type Params = {
    params: { query: string; countryCode: string };
    searchParams: {
        sortBy?: SortOptions;
        page?: string;
    };
};
