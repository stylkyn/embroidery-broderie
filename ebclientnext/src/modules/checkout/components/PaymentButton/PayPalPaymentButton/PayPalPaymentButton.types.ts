import { Cart } from "@medusajs/medusa";

export interface PayPalPaymentButtonProps {
    cart: Omit<Cart, 'refundable_amount' | 'refunded_total'>;
    notReady: boolean;
}
