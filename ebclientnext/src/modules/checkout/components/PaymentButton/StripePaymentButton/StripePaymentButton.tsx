'use client';

import { PaymentSession } from '@medusajs/medusa';
import { Button } from '@medusajs/ui';
import { useElements, useStripe } from '@stripe/react-stripe-js';
import { placeOrder } from '@modules/checkout/actions';
import React, { useState } from 'react';
import { ErrorMessage } from '../../ErrorMessage';
import { StripePaymentButtonProps } from './StripePaymentButton.types';

export const StripePaymentButton = ({
    cart,
    notReady
}: StripePaymentButtonProps) => {
    const [submitting, setSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const onPaymentCompleted = async () => {
        await placeOrder().catch(() => {
            setErrorMessage('An error occurred, please try again.');
            setSubmitting(false);
        });
    };

    const stripe = useStripe();
    const elements = useElements();
    const card = elements?.getElement('card');

    const session = cart.payment_session as PaymentSession;

    const disabled = !stripe || !elements ? true : false;

    const handlePayment = async () => {
        setSubmitting(true);

        if (!stripe || !elements || !card || !cart) {
            setSubmitting(false);

            return;
        }

        await stripe
            .confirmCardPayment(session.data.client_secret as string, {
                payment_method: {
                    card: card,
                    billing_details: {
                        name:
                            cart.billing_address.first_name +
                            ' ' +
                            cart.billing_address.last_name,
                        address: {
                            city: cart.billing_address.city ?? undefined,
                            country:
                                cart.billing_address.country_code ?? undefined,
                            line1: cart.billing_address.address_1 ?? undefined,
                            line2: cart.billing_address.address_2 ?? undefined,
                            postal_code:
                                cart.billing_address.postal_code ?? undefined,
                            state: cart.billing_address.province ?? undefined
                        },
                        email: cart.email,
                        phone: cart.billing_address.phone ?? undefined
                    }
                }
            })
            .then(({ error, paymentIntent }) => {
                if (error) {
                    const pi = error.payment_intent;

                    if (
                        (pi && pi.status === 'requires_capture') ||
                        (pi && pi.status === 'succeeded')
                    ) {
                        onPaymentCompleted();
                    }

                    setErrorMessage(error.message || null);

                    return;
                }

                if (
                    (paymentIntent &&
                        paymentIntent.status === 'requires_capture') ||
                    paymentIntent.status === 'succeeded'
                ) {
                    return onPaymentCompleted();
                }

                return;
            });
    };

    return (
        <>
            <Button
                disabled={disabled || notReady}
                onClick={handlePayment}
                size="large"
                isLoading={submitting}
            >
                Place order
            </Button>
            <ErrorMessage error={errorMessage} />
        </>
    );
};
