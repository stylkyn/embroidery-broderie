import { Cart } from '@medusajs/medusa';

export interface StripePaymentButtonProps {
    cart: Omit<Cart, 'refundable_amount' | 'refunded_total'>;
    notReady: boolean;
}
