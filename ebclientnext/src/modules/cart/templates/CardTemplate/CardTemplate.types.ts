import { Customer } from '@medusajs/medusa';
import { CartWithCheckoutStep } from 'types/global';

export interface CardTemplateProps {
    cart: CartWithCheckoutStep | null;
    customer: Omit<Customer, 'password_hash'> | null;
}
