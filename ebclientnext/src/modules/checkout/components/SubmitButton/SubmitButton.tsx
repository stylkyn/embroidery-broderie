'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';
import { SubmitButtonProps } from './SubmitButton.types';
import { Button } from '@medusajs/ui';

export const SubmitButton = ({
    children,
    variant = 'primary',
    className
}: SubmitButtonProps) => {
    const { pending } = useFormStatus();

    return (
        <Button
            size="large"
            className={className}
            type="submit"
            isLoading={pending}
            variant={variant}
        >
            {children}
        </Button>
    );
};
