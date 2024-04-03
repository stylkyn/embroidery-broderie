import { Cart } from '@medusajs/medusa';

export interface DiscountCodeProps {
    cart: Omit<Cart, 'refundable_amount' | 'refunded_total'>;
}
