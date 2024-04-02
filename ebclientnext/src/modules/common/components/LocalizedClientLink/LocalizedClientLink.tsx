'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';
import { LocalizedClientLinkProps } from './LocalizedClientLink.types';

/**
 * Use this component to create a Next.js `<Link />` that persists the current country code in the url,
 * without having to explicitly pass it as a prop.
 */
export const LocalizedClientLink = ({
    children,
    href,
    ...props
}: LocalizedClientLinkProps) => {
    const { countryCode } = useParams();

    return (
        <Link href={`/${countryCode}${href}`} {...props}>
            {children}
        </Link>
    );
};
