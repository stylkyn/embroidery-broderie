import { Customer } from '@medusajs/medusa';

export interface ProfilePhoneProps {
    customer: Omit<Customer, 'password_hash'>;
}
