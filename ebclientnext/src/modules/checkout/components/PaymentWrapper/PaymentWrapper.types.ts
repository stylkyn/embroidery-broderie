import { Cart } from '@medusajs/medusa';
import { ReactNode } from 'react';

export interface PaymentWrapperProps {
    cart: Omit<Cart, 'refundable_amount' | 'refunded_total'>;
    children: ReactNode;
}
