'use client';

import { clx } from '@medusajs/ui';
import { useParams } from 'next/navigation';

import { LocalizedClientLink } from '@modules/common';
import { AccountNavLinkProps } from './AccountNavLink.types';

export const AccountNavLink = ({
    href,
    route,
    children
}: AccountNavLinkProps) => {
    const { countryCode }: { countryCode: string } = useParams();

    const active = route.split(countryCode)[1] === href;

    return (
        <LocalizedClientLink
            href={href}
            className={clx('text-ui-fg-subtle hover:text-ui-fg-base', {
                'text-ui-fg-base font-semibold': active
            })}
        >
            {children}
        </LocalizedClientLink>
    );
};
