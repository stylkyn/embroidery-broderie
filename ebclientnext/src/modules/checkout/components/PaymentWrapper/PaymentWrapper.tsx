'use client';

import { PaymentSession } from '@medusajs/medusa';
import React from 'react';
import { StripeWrapper } from './StripeWrapper';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { PaymentWrapperProps } from './PaymentWrapper.types';
import { StripeContext } from './PaymentWrapper.contexts';
import {
    PAYPAL_CLIENT_ID,
    STRIPE_KEY,
    STRIPE_PROMISE
} from './PaymentWrapper.consts';

export const PaymentWrapper: React.FC<PaymentWrapperProps> = ({
    cart,
    children
}) => {
    const paymentSession = cart.payment_session as PaymentSession;

    const isStripe = paymentSession?.provider_id?.includes('stripe');

    if (isStripe && paymentSession && STRIPE_PROMISE) {
        return (
            <StripeContext.Provider value={true}>
                <StripeWrapper
                    paymentSession={paymentSession}
                    stripeKey={STRIPE_KEY}
                    stripePromise={STRIPE_PROMISE}
                >
                    {children}
                </StripeWrapper>
            </StripeContext.Provider>
        );
    }

    if (
        paymentSession?.provider_id === 'paypal' &&
        PAYPAL_CLIENT_ID !== undefined &&
        cart
    ) {
        return (
            <PayPalScriptProvider
                options={{
                    'client-id': 'test',
                    currency: cart?.region.currency_code.toUpperCase(),
                    intent: 'authorize',
                    components: 'buttons'
                }}
            >
                {children}
            </PayPalScriptProvider>
        );
    }

    return <div>{children}</div>;
};
