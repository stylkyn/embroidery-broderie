import { retrievePricedProductById } from '@lib/medusajs';
import { Region } from '@medusajs/medusa';
import { ProductActions } from '@modules/products';

/**
 * Fetches real time pricing for a product and renders the product actions component.
 */
export const ProductActionsWrapper = async ({
    id,
    region
}: {
    id: string;
    region: Region;
}) => {
    const product = await retrievePricedProductById({
        id,
        regionId: region.id
    });

    if (!product) {
        return null;
    }

    return <ProductActions product={product} region={region} />;
};
