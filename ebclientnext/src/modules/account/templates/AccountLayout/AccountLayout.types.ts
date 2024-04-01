import { Customer } from '@medusajs/medusa';

export interface AccountLayoutProps {
    customer: Omit<Customer, 'password_hash'> | null;
    children: React.ReactNode;
}
