import { Order } from '@medusajs/medusa';

export interface OrderDetailsProps {
    order: Order;
    showStatus?: boolean;
}
