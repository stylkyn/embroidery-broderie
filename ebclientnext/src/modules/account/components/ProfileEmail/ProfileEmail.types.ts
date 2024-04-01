import { Customer } from '@medusajs/medusa';

export interface ProfileEmailProps {
    customer: Omit<Customer, 'password_hash'>;
}
