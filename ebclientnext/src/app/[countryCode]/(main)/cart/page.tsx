import CartTemplate from '@modules/cart/templates';
import { getCustomer } from '@lib/medusajs';
import { fetchCart } from './page.utils';

export { metadata } from './page.metadata';

export default async function Cart() {
    const cart = await fetchCart();
    const customer = await getCustomer();

    return <CartTemplate cart={cart} customer={customer} />;
}
