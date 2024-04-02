import { ReactNode } from 'react';

export interface ModalProps {
    isOpen: boolean;
    close: () => void;
    size?: 'small' | 'medium' | 'large';
    search?: boolean;
    children: ReactNode;
}
