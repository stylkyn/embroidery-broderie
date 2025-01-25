'use client';

import { clx } from '@medusajs/ui';
import { useParams } from 'next/navigation';

import { AccountNavLinkProps } from './AccountNavLink.types';
import { LocalizedClientLink } from '@modules/common/components/LocalizedClientLink';

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
