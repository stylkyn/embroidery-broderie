import { SortOptions } from '@modules/store/components/RefinementList/SortProducts/types';

export type Params = {
    searchParams: {
        sortBy?: SortOptions;
        page?: string;
    };
    params: {
        countryCode: string;
    };
};
