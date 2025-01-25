import { getCustomer } from '@lib/medusajs';
import { fetchCart } from './page.utils';
import { CartTemplate } from '@modules/cart/templates/CardTemplate';

export { metadata } from './page.metadata';

export default async function Cart() {
    const cart = await fetchCart();
    const customer = await getCustomer();

    return <CartTemplate cart={cart} customer={customer} />;
}
