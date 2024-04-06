import { ArrowUpRightMini } from '@medusajs/icons';
import { Text } from '@medusajs/ui';
import { LocalizedClientLink } from '../LocalizedClientLink';
import { InteractiveLinkProps } from './InteractiveLink.types';

export const InteractiveLink = ({
    href,
    children,
    onClick,
    ...props
}: InteractiveLinkProps) => {
    return (
        <LocalizedClientLink
            className="flex gap-x-1 items-center group"
            href={href}
            onClick={onClick}
            {...props}
        >
            <Text className="text-ui-fg-interactive">{children}</Text>
            <ArrowUpRightMini
                className="group-hover:rotate-45 ease-in-out duration-150"
                color="var(--fg-interactive)"
            />
        </LocalizedClientLink>
    );
};
