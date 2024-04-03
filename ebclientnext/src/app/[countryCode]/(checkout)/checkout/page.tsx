import { notFound } from 'next/navigation';

import { PaymentWrapper } from '@modules/checkout/components/PaymentWrapper';
import { CheckoutForm } from '@modules/checkout/templates/CheckoutForm';
import { CheckoutSummary } from '@modules/checkout/templates/CheckoutSummary';
import { fetchCart } from './page.utils';

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
