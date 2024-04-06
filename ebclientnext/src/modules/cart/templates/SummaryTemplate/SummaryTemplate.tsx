'use client';

import { Button, Heading } from '@medusajs/ui';

import { CartTotals, Divider, LocalizedClientLink } from '@modules/common';
import { DiscountCode } from '@modules/checkout';
import { SummaryTemplateProps } from './SummaryTemplate.types';

export const SummaryTemplate = ({ cart }: SummaryTemplateProps) => {
    return (
        <div className="flex flex-col gap-y-4">
            <Heading level="h2" className="text-[2rem] leading-[2.75rem]">
                Summary
            </Heading>
            <DiscountCode cart={cart} />
            <Divider />
            <CartTotals data={cart} />
            <LocalizedClientLink href={'/checkout?step=' + cart.checkout_step}>
                <Button className="w-full h-10">Go to checkout</Button>
            </LocalizedClientLink>
        </div>
    );
};
