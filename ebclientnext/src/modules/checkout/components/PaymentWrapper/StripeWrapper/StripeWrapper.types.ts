import { Stripe } from '@stripe/stripe-js';
import { PaymentSession } from '@medusajs/medusa';

export interface StripeWrapperProps {
    paymentSession: PaymentSession;
    stripeKey?: string;
    stripePromise: Promise<Stripe | null> | null;
    children: React.ReactNode;
}
