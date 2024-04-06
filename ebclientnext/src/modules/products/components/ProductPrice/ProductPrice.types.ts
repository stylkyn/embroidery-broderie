import {
    PricedProduct,
    PricedVariant
} from '@medusajs/medusa/dist/types/pricing';

import { RegionInfo } from 'types/global';

export interface ProductPriceProps {
    product: PricedProduct;
    variant?: PricedVariant;
    region: RegionInfo;
}
