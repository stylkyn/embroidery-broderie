import { Address, Cart } from '@medusajs/medusa';

export interface AddressSelectProps {
    addresses: Address[];
    cart: Omit<Cart, 'refundable_amount' | 'refunded_total'> | null;
}
