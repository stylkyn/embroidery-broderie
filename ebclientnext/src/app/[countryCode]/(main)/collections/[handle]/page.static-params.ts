import { getCollectionsList, listRegions } from '@lib/medusajs';

export async function generateStaticParams() {
    const { collections } = await getCollectionsList();

    if (!collections) {
        return [];
    }

    const countryCodes = await listRegions().then((regions) =>
        regions?.map((r) => r.countries.map((c) => c.iso_2)).flat()
    );

    const collectionHandles = collections.map(
        (collection) => collection.handle
    );

    const staticParams = countryCodes
        ?.map((countryCode) =>
            collectionHandles.map((handle) => ({
                countryCode,
                handle
            }))
        )
        .flat();

    return staticParams;
}
