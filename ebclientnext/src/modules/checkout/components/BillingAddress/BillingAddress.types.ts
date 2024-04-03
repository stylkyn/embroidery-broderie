import { Cart } from '@medusajs/medusa';

export interface BillingAddressProps {
    cart: Omit<Cart, 'refundable_amount' | 'refunded_total'> | null;
    countryCode: string;
}
