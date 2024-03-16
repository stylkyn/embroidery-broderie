import { Metadata } from "next"
import { notFound } from "next/navigation"

import {
  getProductByHandle,
  getProductsList,
  getRegion,
  listRegions,
  retrievePricedProductById,
} from "@lib/data"
import { Region } from "@medusajs/medusa"
import ProductTemplate from "@modules/products/templates"
import { Props } from "./page.types"
import { staticParams } from "./page.static-params"
import { _generateMetadata } from "./page.metadata"
import { getPricedProductByHandle } from "./page.utils"

export function generateStaticParams () { return staticParams()}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return _generateMetadata(params)
}


export default async function ProductPage({ params }: Props) {
  const region = await getRegion(params.countryCode)

  if (!region) {
    notFound()
  }

  const pricedProduct = await getPricedProductByHandle(params.handle, region)

  if (!pricedProduct) {
    notFound()
  }

  return (
    <ProductTemplate
      product={pricedProduct}
      region={region}
      countryCode={params.countryCode}
    />
  )
}
