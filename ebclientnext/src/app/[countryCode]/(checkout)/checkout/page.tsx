import { notFound } from "next/navigation"

import Wrapper from "@modules/checkout/components/payment-wrapper"
import CheckoutForm from "@modules/checkout/templates/checkout-form"
import CheckoutSummary from "@modules/checkout/templates/checkout-summary"
import { fetchCart } from './page.utils'


export { metadata } from './page.metadata';

export default async function Checkout() {
    const cart = await fetchCart()

    if (!cart) {
        return notFound()
    }

    return (
        <div className="grid grid-cols-1 small:grid-cols-[1fr_416px] content-container gap-x-40 py-12">
            <Wrapper cart={cart}>
                <CheckoutForm />
            </Wrapper>
            <CheckoutSummary />
        </div>
    )
}
