import { Heading, Text } from '@medusajs/ui';

import { RefinementList, PaginatedProducts } from '@modules/store';
import { LocalizedClientLink } from '@modules/common';
import { SearchResultsTemplateProps } from './SearchResultsTemplate.types';

export const SearchResultsTemplate = ({
    query,
    ids,
    sortBy,
    page,
    countryCode
}: SearchResultsTemplateProps) => {
    const pageNumber = page ? parseInt(page) : 1;

    return (
        <>
            <div className="flex justify-between border-b w-full py-6 px-8 small:px-14 items-center">
                <div className="flex flex-col items-start">
                    <Text className="text-ui-fg-muted">
                        Search Results for:
                    </Text>
                    <Heading>
                        {decodeURI(query)} ({ids.length})
                    </Heading>
                </div>
                <LocalizedClientLink
                    href="/store"
                    className="txt-medium text-ui-fg-subtle hover:text-ui-fg-base"
                >
                    Clear
                </LocalizedClientLink>
            </div>
            <div className="flex flex-col small:flex-row small:items-start p-6">
                {ids.length > 0 ? (
                    <>
                        <RefinementList
                            sortBy={sortBy || 'created_at'}
                            search
                        />
                        <div className="content-container">
                            <PaginatedProducts
                                productsIds={ids}
                                sortBy={sortBy}
                                page={pageNumber}
                                countryCode={countryCode}
                            />
                        </div>
                    </>
                ) : (
                    <Text className="ml-8 small:ml-14 mt-3">No results.</Text>
                )}
            </div>
        </>
    );
};
