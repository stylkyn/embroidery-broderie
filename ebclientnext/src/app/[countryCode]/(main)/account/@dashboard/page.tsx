import { getCustomer, listCustomerOrders } from '@lib/medusajs';
import { Overview } from '@modules/account';
import { notFound } from 'next/navigation';

export { metadata } from './page.metadata';

export default async function OverviewTemplate() {
    const customer = await getCustomer().catch(() => null);
    const orders = (await listCustomerOrders().catch(() => null)) || null;

    if (!customer) {
        notFound();
    }

    return <Overview customer={customer} orders={orders} />;
}
