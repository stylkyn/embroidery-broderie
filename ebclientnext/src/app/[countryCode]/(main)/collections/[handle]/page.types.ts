import { SortOptions } from '@modules/store/components/RefinementList/SortProducts/types';

export interface Props {
    params: { handle: string; countryCode: string };
    searchParams: {
        page?: string;
        sortBy?: SortOptions;
    };
}
