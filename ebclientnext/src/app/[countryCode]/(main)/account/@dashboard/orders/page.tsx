import { listCustomerOrders } from '@lib/medusajs';
import { OrderOverview } from '@modules/account/components/OrderOverview';
import { notFound } from 'next/navigation';

export { metadata } from './page.metadata';

export default async function Orders() {
    const orders = await listCustomerOrders();

    if (!orders) {
        notFound();
    }

    return (
        <div className="w-full">
            <div className="mb-8 flex flex-col gap-y-4">
                <h1 className="text-2xl-semi">Orders</h1>
                <p className="text-base-regular">
                    View your previous orders and their status. You can also
                    create returns or exchanges for your orders if needed.
                </p>
            </div>
            <div>
                <OrderOverview orders={orders} />
            </div>
        </div>
    );
}
