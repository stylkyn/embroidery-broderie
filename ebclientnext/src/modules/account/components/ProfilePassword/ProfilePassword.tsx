'use client';

import React, { useEffect } from 'react';


import { AccountInfo } from '../AccountInfo';
import { useFormState } from 'react-dom';
import { ProfilePasswordProps } from './ProfilePassword.types';
import { Input } from '@modules/common/components/Input';
import { updateCustomerPassword } from '@modules/account/actions';

export const ProfilePassword: React.FC<ProfilePasswordProps> = ({
    customer
}) => {
    const [successState, setSuccessState] = React.useState(false);

    const [state, formAction] = useFormState(updateCustomerPassword, {
        customer,
        success: false,
        error: false
    });

    const clearState = () => {
        setSuccessState(false);
    };

    useEffect(() => {
        setSuccessState(state.success);
    }, [state]);

    return (
        <form
            action={formAction}
            onReset={() => clearState()}
            className="w-full"
        >
            <AccountInfo
                label="Password"
                currentInfo={
                    <span>The password is not shown for security reasons</span>
                }
                isSuccess={successState}
                isError={!!state.error}
                errorMessage={state.error}
                clearState={clearState}
            >
                <div className="grid grid-cols-2 gap-4">
                    <Input
                        label="Old password"
                        name="old_password"
                        required
                        type="password"
                    />
                    <Input
                        label="New password"
                        type="password"
                        name="new_password"
                        required
                    />
                    <Input
                        label="Confirm password"
                        type="password"
                        name="confirm_password"
                        required
                    />
                </div>
            </AccountInfo>
        </form>
    );
};
