import CartDropdown from '../CartDropdown';
import { fetchCart } from './CartButton.utils';

export const CartButton = async () => {
    const cart = await fetchCart();

    return <CartDropdown cart={cart} />;
};
