import { Customer } from '@medusajs/medusa';

export interface ProfileNameProps {
    customer: Omit<Customer, 'password_hash'>;
}
