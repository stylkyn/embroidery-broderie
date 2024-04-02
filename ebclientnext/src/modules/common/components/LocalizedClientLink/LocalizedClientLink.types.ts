export interface LocalizedClientLinkProps {
    children?: React.ReactNode;
    href: string;
    className?: string;
    onClick?: () => void;
    passHref?: true;
    [x: string]: any;
}
