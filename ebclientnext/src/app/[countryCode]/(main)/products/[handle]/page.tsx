import { notFound } from "next/navigation"

import {
    getRegion,
} from "@lib/data"
import ProductTemplate from "@modules/products/templates"
import { Props } from "./page.types"
import { getPricedProductByHandle } from "./page.utils"

export { generateStaticParams } from './page.static-params';
export { generateMetadata } from './page.metadata';

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
