import { SortOptions } from '@modules/store/components/RefinementList/SortProducts/types';

export type Props = {
    params: { category: string[]; countryCode: string };
    searchParams: {
        sortBy?: SortOptions;
        page?: string;
    };
};
