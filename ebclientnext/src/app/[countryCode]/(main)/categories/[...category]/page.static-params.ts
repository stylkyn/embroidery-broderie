import { listCategories, listRegions } from '@lib/data'

export async function generateStaticParams() {
    const product_categories = await listCategories()

    if (!product_categories) {
        return []
    }

    const countryCodes = await listRegions().then((regions) =>
        regions?.map((r) => r.countries.map((c) => c.iso_2)).flat()
    )

    const categoryHandles = product_categories.map(
        (category) => category.handle
    )

    const staticParams = countryCodes
        ?.map((countryCode) =>
            categoryHandles.map((handle) => ({
                countryCode,
                category: [handle],
            }))
        )
        .flat()

    return staticParams
}
