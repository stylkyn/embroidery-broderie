import { Heading } from '@medusajs/ui';
import { LocalizedClientLink } from '@modules/common/components/LocalizedClientLink';
import React from 'react';

export const Help = () => {
    return (
        <div className="mt-6">
            <Heading className="text-base-semi">Need help?</Heading>
            <div className="text-base-regular my-2">
                <ul className="gap-y-2 flex flex-col">
                    <li>
                        <LocalizedClientLink href="/contact">
                            Contact
                        </LocalizedClientLink>
                    </li>
                    <li>
                        <LocalizedClientLink href="/contact">
                            Returns & Exchanges
                        </LocalizedClientLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};
