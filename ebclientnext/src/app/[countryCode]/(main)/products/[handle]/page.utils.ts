import { getProductByHandle, retrievePricedProductById } from "@lib/data"
import { Region } from "@medusajs/medusa"

export const getPricedProductByHandle = async (handle: string, region: Region) => {
    const { product } = await getProductByHandle(handle).then(
        (product) => product
    )

    if (!product 
        
        
        
        || !product.id) {
        return null
    }

    const pricedProduct = await retrievePricedProductById({
        id: product.id,
        regionId: region.id,
    })


    return pricedProduct
}