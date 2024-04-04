import {
    PricedProduct,
    PricedVariant
} from '@medusajs/medusa/dist/types/pricing';

import { Region } from '@medusajs/medusa';

export interface MobileActionsProps {
    product: PricedProduct;
    variant?: PricedVariant;
    region: Region;
    options: Record<string, string>;
    updateOptions: (update: Record<string, string>) => void;
    inStock?: boolean;
    handleAddToCart: () => void;
    isAdding?: boolean;
    show: boolean;
}
