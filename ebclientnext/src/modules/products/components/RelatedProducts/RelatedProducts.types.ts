import { PricedProduct } from '@medusajs/medusa/dist/types/pricing';

export interface RelatedProductsProps {
    product: PricedProduct;
    countryCode: string;
}
