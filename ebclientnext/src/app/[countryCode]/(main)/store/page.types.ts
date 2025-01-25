import { SortOptions } from '@modules/store/components/RefinementList/SortProducts/SortProducts.types';

export type Params = {
    searchParams: {
        sortBy?: SortOptions;
        page?: string;
    };
    params: {
        countryCode: string;
    };
};
