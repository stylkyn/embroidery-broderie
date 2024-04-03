import { Cart } from '@medusajs/medusa';

export interface ReviewProps {
    cart: Omit<Cart, 'refundable_amount' | 'refunded_total'>;
}
