import {
    getProductsList,
    listRegions,
  } from "@lib/data"

export async function staticParams() {
    const countryCodes = await listRegions().then((regions) =>
      regions?.map((r) => r.countries.map((c) => c.iso_2)).flat()
    )

    if (!countryCodes) {
      return null
    }

    const products = await Promise.all(
      countryCodes.map((countryCode) => {
        return getProductsList({ countryCode })
      })
    ).then((responses) =>
      responses.map(({ response }) => response.products).flat()
    )

    const staticParams = countryCodes
      ?.map((countryCode) =>
        products.map((product) => ({
          countryCode,
          handle: product.handle,
        }))
      )
      .flat()

    return staticParams
}