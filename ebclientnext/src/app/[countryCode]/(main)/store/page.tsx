import StoreTemplate from '@modules/store/templates';
import { Params } from './page.types';

export default function StorePage({ searchParams, params }: Params) {
    const { sortBy, page } = searchParams;

    return (
        <StoreTemplate
            sortBy={sortBy}
            page={page}
            countryCode={params.countryCode}
        />
    );
}
