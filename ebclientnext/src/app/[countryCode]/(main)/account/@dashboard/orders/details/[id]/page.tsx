import { notFound } from 'next/navigation';
import { retrieveOrder } from '@lib/medusajs';
import { Props } from './page.types';
import { OrderDetailsTemplate } from '@modules/order/templates/OrderDetailsTemplate';

export { generateMetadata } from './page.metadata';

export default async function OrderDetailPage({ params }: Props) {
    const order = await retrieveOrder(params.id).catch(() => null);

    if (!order) {
        notFound();
    }

    return <OrderDetailsTemplate order={order} />;
}
