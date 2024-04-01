import OrderCompletedTemplate from '@modules/order/templates/order-completed-template';
import { getOrder } from './page.utils';
import { Props } from './page.types';

export default async function OrderConfirmedPage({ params }: Props) {
    const { order } = await getOrder(params.id);

    return <OrderCompletedTemplate order={order} />;
}
