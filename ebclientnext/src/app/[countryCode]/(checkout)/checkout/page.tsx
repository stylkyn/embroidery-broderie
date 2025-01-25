import { notFound } from 'next/navigation';

import { CheckoutForm } from '@modules/checkout/templates/CheckoutForm';
import { fetchCart } from './page.utils';
import { PaymentWrapper } from '@modules/checkout/components/PaymentWrapper';
import { CheckoutSummary } from '@modules/checkout/templates/CheckoutSummary';

export { metadata } from './page.metadata';

export default async function Checkout() {
    const cart = await fetchCart();

    if (!cart) {
        return notFound();
    }

    return (
        <div className="grid grid-cols-1 small:grid-cols-[1fr_416px] content-container gap-x-40 py-12">
            <PaymentWrapper cart={cart}>
                <CheckoutForm />
            </PaymentWrapper>
            <CheckoutSummary />
        </div>
    );
}
