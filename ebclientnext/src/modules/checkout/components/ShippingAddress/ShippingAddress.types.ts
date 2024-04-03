import { Cart, Customer } from '@medusajs/medusa';

export interface ShippingAddressProps {
    customer: Omit<Customer, 'password_hash'> | null;
    cart: Omit<Cart, 'refundable_amount' | 'refunded_total'> | null;
    checked: boolean;
    onChange: () => void;
    countryCode: string;
}
