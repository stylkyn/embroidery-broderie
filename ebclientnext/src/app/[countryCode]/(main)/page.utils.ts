import { Product } from '@medusajs/medusa';

import { getCollectionsList, getProductsList } from '@lib/medusajs';
import { ProductCollectionWithPreviews } from 'types/global';
import { cache } from 'react';

export const getCollectionsWithProducts = cache(
    async (
        countryCode: string
    ): Promise<ProductCollectionWithPreviews[] | null> => {
        const { collections } = await getCollectionsList(0, 3);

        if (!collections) {
            return null;
        }

        const collectionIds = collections.map((collection) => collection.id);

        await Promise.all(
            collectionIds.map((id) =>
                getProductsList({
                    queryParams: { collection_id: [id] },
                    countryCode
                })
            )
        ).then((responses) =>
            responses.forEach(({ response, queryParams }) => {
                let collection;

                if (collections) {
                    collection = collections.find(
                        (collection) =>
                            collection.id === queryParams?.collection_id?.[0]
                    );
                }

                if (!collection) {
                    return;
                }

                collection.products = response.products as unknown as Product[];
            })
        );

        return collections as unknown as ProductCollectionWithPreviews[];
    }
);
