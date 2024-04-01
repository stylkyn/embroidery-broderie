import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { retrieveOrder } from '@lib/medusajs';
import { Props } from './page.types';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const order = await retrieveOrder(params.id).catch(() => null);

    if (!order) {
        notFound();
    }

    return {
        title: `Order #${order.display_id}`,
        description: `View your order`
    };
}
