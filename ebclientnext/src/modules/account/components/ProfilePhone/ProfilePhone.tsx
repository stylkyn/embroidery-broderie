'use client';

import React, { useEffect } from 'react';
import { useFormState } from 'react-dom';


import { AccountInfo } from '../AccountInfo';
import { updateCustomerPhone } from '@modules/account/actions';
import { ProfilePhoneProps } from './ProfilePhone.types';
import { Input } from '@modules/common/components/Input';

export const ProfilePhone: React.FC<ProfilePhoneProps> = ({ customer }) => {
    const [successState, setSuccessState] = React.useState(false);

    const [state, formAction] = useFormState(updateCustomerPhone, {
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
                label="Phone"
                currentInfo={`${customer.phone}`}
                isSuccess={successState}
                isError={!!state.error}
                errorMessage={state.error}
                clearState={clearState}
            >
                <div className="grid grid-cols-1 gap-y-2">
                    <Input
                        label="Phone"
                        name="phone"
                        type="phone"
                        autoComplete="phone"
                        required
                        defaultValue={customer.phone}
                    />
                </div>
            </AccountInfo>
        </form>
    );
};
