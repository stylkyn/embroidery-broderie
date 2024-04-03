'use client';

import { PaymentSession } from '@medusajs/medusa';
import { Button } from '@medusajs/ui';
import React from 'react';
import { PaymentButtonProps } from './PaymentButton.types';
import { StripePaymentButton } from './StripePaymentButton';
import { PayPalPaymentButton } from './PayPalPaymentButton';
import { ManualTestPaymentButton } from './ManualTestPaymentButton';

export const PaymentButton: React.FC<PaymentButtonProps> = ({ cart }) => {
    const notReady =
        !cart ||
        !cart.shipping_address ||
        !cart.billing_address ||
        !cart.email ||
        cart.shipping_methods.length < 1
            ? true
            : false;

    const paymentSession = cart.payment_session as PaymentSession;

    switch (paymentSession.provider_id) {
        case 'stripe':
            return <StripePaymentButton notReady={notReady} cart={cart} />;
        case 'manual':
            return <ManualTestPaymentButton notReady={notReady} />;
        case 'paypal':
            return <PayPalPaymentButton notReady={notReady} cart={cart} />;
        default:
            return <Button disabled>Select a payment method</Button>;
    }
};
