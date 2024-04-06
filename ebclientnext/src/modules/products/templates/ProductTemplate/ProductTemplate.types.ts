import { Region } from '@medusajs/medusa';
import { PricedProduct } from '@medusajs/medusa/dist/types/pricing';

export interface ProductTemplateProps {
    product: PricedProduct;
    region: Region;
    countryCode: string;
}
