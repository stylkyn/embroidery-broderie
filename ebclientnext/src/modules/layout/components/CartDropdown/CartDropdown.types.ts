import { Cart } from '@medusajs/medusa';

export interface CartDropdownProps {
    cart?: Omit<Cart, 'beforeInsert' | 'afterLoad'> | null;
}
