import { Order } from '@medusajs/medusa';

export interface OrderCardProps {
    order: Omit<Order, 'beforeInsert'>;
}
