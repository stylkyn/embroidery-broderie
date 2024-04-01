import { LineItem } from '@medusajs/medusa';
import { cookies } from 'next/headers';
import { enrichLineItems } from '@modules/cart/actions';
import { getCheckoutStep } from '@lib/util/get-checkout-step';
import { CartWithCheckoutStep } from 'types/global';
import { getCart } from '@lib/medusajs';

export const fetchCart = async () => {
    const cartId = cookies().get('_medusa_cart_id')?.value;

    if (!cartId) {
        return null;
    }

    const cart = await getCart(cartId).then(
        (cart) => cart as CartWithCheckoutStep
    );

    if (!cart) {
        return null;
    }

    if (cart?.items.length) {
        const enrichedItems = await enrichLineItems(
            cart?.items,
            cart?.region_id
        );
        cart.items = enrichedItems as LineItem[];
    }

    cart.checkout_step = cart && getCheckoutStep(cart);

    return cart;
};
