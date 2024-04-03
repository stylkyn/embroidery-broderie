'use client';

import { PaymentSession } from '@medusajs/medusa';
import { OnApproveActions, OnApproveData } from '@paypal/paypal-js';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { placeOrder } from '@modules/checkout/actions';
import React, { useState } from 'react';
import { ErrorMessage } from '../../ErrorMessage';
import Spinner from '@modules/common/icons/spinner';
import { PayPalPaymentButtonProps } from './PayPalPaymentButton.types';

export const PayPalPaymentButton = ({
    cart,
    notReady
}: PayPalPaymentButtonProps) => {
    const [submitting, setSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const onPaymentCompleted = async () => {
        await placeOrder().catch(() => {
            setErrorMessage('An error occurred, please try again.');
            setSubmitting(false);
        });
    };

    const session = cart.payment_session as PaymentSession;

    // TODO: Fixnout
    const handlePayment = async (
        _data: OnApproveData,
        actions: OnApproveActions
        // eslint-disable-next-line require-await
    ): Promise<void> => {
        actions?.order
            ?.authorize()
            .then((authorization) => {
                if (authorization.status !== 'COMPLETED') {
                    setErrorMessage(
                        `An error occurred, status: ${authorization.status}`
                    );

                    return;
                }
                onPaymentCompleted();
            })
            .catch(() => {
                setErrorMessage(`An unknown error occurred, please try again.`);
                setSubmitting(false);
            });
    };

    const [{ isPending, isResolved }] = usePayPalScriptReducer();

    if (isPending) {
        return <Spinner />;
    }

    if (isResolved) {
        return (
            <>
                <PayPalButtons
                    style={{ layout: 'horizontal' }}
                    // TODO: Fixnout
                    // eslint-disable-next-line require-await
                    createOrder={async (): Promise<string> =>
                        session.data.id as string
                    }
                    onApprove={handlePayment}
                    disabled={notReady || submitting || isPending}
                />
                <ErrorMessage error={errorMessage} />
            </>
        );
    }
};
