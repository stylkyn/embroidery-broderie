import { SortOptions } from '@modules/store/components/refinement-list/sort-products/types';

export interface Props {
    params: { handle: string; countryCode: string };
    searchParams: {
        page?: string;
        sortBy?: SortOptions;
    };
}
