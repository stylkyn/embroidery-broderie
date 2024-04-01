import { retrieveOrder } from '@lib/medusajs';
import { LineItem, Order } from '@medusajs/medusa';
import { enrichLineItems } from '@modules/cart/actions';
import { notFound } from 'next/navigation';

export async function getOrder(id: string) {
    const order = await retrieveOrder(id);

    if (!order) {
        return notFound();
    }

    const enrichedItems = await enrichLineItems(order.items, order.region_id);

    return {
        order: {
            ...order,
            items: enrichedItems as LineItem[]
        } as Order
    };
}
