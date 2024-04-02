'use client';

import React, { useEffect } from 'react';
import { useFormState } from 'react-dom';

import Input from '@modules/common/components/Input';

import { AccountInfo } from '../AccountInfo';
import { updateCustomerEmail } from '@modules/account/actions';
import { ProfileEmailProps } from './ProfileEmail.types';

export const ProfileEmail: React.FC<ProfileEmailProps> = ({ customer }) => {
    const [successState, setSuccessState] = React.useState(false);

    const [state, formAction] = useFormState(updateCustomerEmail, {
        error: false,
        success: false
    });

    const clearState = () => {
        setSuccessState(false);
    };

    useEffect(() => {
        setSuccessState(state.success);
    }, [state]);

    return (
        <form action={formAction} className="w-full">
            <AccountInfo
                label="Email"
                currentInfo={`${customer.email}`}
                isSuccess={successState}
                isError={!!state.error}
                errorMessage={state.error}
                clearState={clearState}
            >
                <div className="grid grid-cols-1 gap-y-2">
                    <Input
                        label="Email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        defaultValue={customer.email}
                    />
                </div>
            </AccountInfo>
        </form>
    );
};
