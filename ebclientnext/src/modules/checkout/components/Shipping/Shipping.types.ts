import { Cart } from '@medusajs/medusa';
import { PricedShippingOption } from '@medusajs/medusa/dist/types/pricing';

export interface ShippingProps {
    cart: Omit<Cart, 'refundable_amount' | 'refunded_total'>;
    availableShippingMethods: PricedShippingOption[] | null;
}
