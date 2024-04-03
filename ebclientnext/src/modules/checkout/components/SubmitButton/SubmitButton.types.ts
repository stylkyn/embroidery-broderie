import { ReactNode } from 'react';

export interface SubmitButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'transparent' | 'danger' | null;
    className?: string;
}
