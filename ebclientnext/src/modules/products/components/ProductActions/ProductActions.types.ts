import { Region } from '@medusajs/medusa';
import { PricedProduct } from '@medusajs/medusa/dist/types/pricing';

export interface ProductActionsProps {
    product: PricedProduct;
    region: Region;
}
