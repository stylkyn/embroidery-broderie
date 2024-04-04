import { LineItem } from '@medusajs/medusa';
import { enrichLineItems, retrieveCart } from '@modules/cart/actions';

export const fetchCart = async () => {
    const cart = await retrieveCart();

    if (cart?.items.length) {
        const enrichedItems = await enrichLineItems(
            cart?.items,
            cart?.region_id
        );
        cart.items = enrichedItems as LineItem[];
    }

    return cart;
};
