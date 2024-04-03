import { Cart } from '@medusajs/medusa';

export interface PaymentButtonProps {
    cart: Omit<Cart, 'refundable_amount' | 'refunded_total'>;
}
