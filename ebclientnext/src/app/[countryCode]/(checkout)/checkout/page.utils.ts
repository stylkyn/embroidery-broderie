import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import { LineItem } from '@medusajs/medusa';

import { enrichLineItems } from '@modules/cart/actions';
import { getCart } from '@lib/medusajs';

export const fetchCart = async () => {
    const cartId = cookies().get('_medusa_cart_id')?.value;

    if (!cartId) {
        return notFound();
    }

    const cart = await getCart(cartId).then((cart) => cart);

    if (cart?.items.length) {
        const enrichedItems = await enrichLineItems(
            cart?.items,
            cart?.region_id
        );
        cart.items = enrichedItems as LineItem[];
    }

    return cart;
};
