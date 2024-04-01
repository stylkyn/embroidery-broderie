import { Customer, Order } from '@medusajs/medusa';

export interface OverviewProps {
    customer: Omit<Customer, 'password_hash'> | null;
    orders: Order[] | null;
}
