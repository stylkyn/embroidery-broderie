'use client';

import { Button } from '@medusajs/ui';
import React, { useState } from 'react';
import { ErrorMessage } from '../../ErrorMessage';
import { placeOrder } from '@modules/checkout/actions';

export const ManualTestPaymentButton = ({
    notReady
}: {
    notReady: boolean;
}) => {
    const [submitting, setSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const onPaymentCompleted = async () => {
        await placeOrder().catch((err) => {
            setErrorMessage(err.toString());
            setSubmitting(false);
        });
    };

    const handlePayment = () => {
        setSubmitting(true);

        onPaymentCompleted();
    };

    return (
        <>
            <Button
                disabled={notReady}
                isLoading={submitting}
                onClick={handlePayment}
                size="large"
            >
                Place order
            </Button>
            <ErrorMessage error={errorMessage} />
        </>
    );
};
