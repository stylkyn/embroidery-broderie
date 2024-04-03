import { Cart } from '@medusajs/medusa';

export interface PaymentProps {
    cart: Omit<Cart, 'refundable_amount' | 'refunded_total'> | null;
}
