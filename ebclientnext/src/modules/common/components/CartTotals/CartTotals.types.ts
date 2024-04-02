import { Cart, Order } from '@medusajs/medusa';

export interface CartTotalsProps {
    data: Omit<Cart, 'refundable_amount' | 'refunded_total'> | Order;
}
