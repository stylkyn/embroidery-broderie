import { SearchResultsTemplate } from '@modules/search/templates/SearchResultsTemplate';

import { search } from '@modules/search/actions';
import { Params } from './page.types';

export default async function SearchResults({ params, searchParams }: Params) {
    const { query } = params;
    const { sortBy, page } = searchParams;

    const hits = await search(query).then((data) => data);

    const ids = hits
        .map((h) => h.objectID || h.id)
        .filter((id): id is string => {
            return typeof id === 'string';
        });

    return (
        <SearchResultsTemplate
            query={query}
            ids={ids}
            sortBy={sortBy}
            page={page}
            countryCode={params.countryCode}
        />
    );
}
