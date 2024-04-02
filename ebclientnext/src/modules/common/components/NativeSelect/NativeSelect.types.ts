import { SelectHTMLAttributes } from 'react';

export type NativeSelectProps = {
    placeholder?: string;
    errors?: Record<string, unknown>;
    touched?: Record<string, unknown>;
} & SelectHTMLAttributes<HTMLSelectElement>;
