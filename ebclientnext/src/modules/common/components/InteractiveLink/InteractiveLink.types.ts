import { ReactNode } from 'react';

export interface InteractiveLinkProps {
    href: string;
    children?: ReactNode;
    onClick?: () => void;
}
