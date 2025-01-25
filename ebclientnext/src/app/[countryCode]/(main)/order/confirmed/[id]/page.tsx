import { getOrder } from './page.utils';
import { Props } from './page.types';
import { OrderCompletedTemplate } from '@modules/order/templates/OrderCompletedTemplate';

export default async function OrderConfirmedPage({ params }: Props) {
    const { order } = await getOrder(params.id);

    return <OrderCompletedTemplate order={order} />;
}
