'use client';

import { InformationCircleSolid } from '@medusajs/icons';
import { Heading, Label, Text, Tooltip } from '@medusajs/ui';
import React, { useMemo } from 'react';
import { useFormState } from 'react-dom';

import {
    removeDiscount,
    removeGiftCard,
    submitDiscountForm
} from '@modules/checkout/actions';
import { formatAmount } from '@lib/util/prices';
import { DiscountCodeProps } from './DiscountCode.types';
import { SubmitButton } from '../SubmitButton';
import { ErrorMessage } from '../ErrorMessage';
import { Trash } from '@modules/common/icons';
import { Input } from '@modules/common/components/Input';

export const DiscountCode: React.FC<DiscountCodeProps> = ({ cart }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const { discounts, gift_cards, region } = cart;

    const appliedDiscount = useMemo(() => {
        if (!discounts || !discounts.length) {
            return undefined;
        }

        switch (discounts[0].rule.type) {
            case 'percentage':
                return `${discounts[0].rule.value}%`;
            case 'fixed':
                return `- ${formatAmount({
                    amount: discounts[0].rule.value,
                    region: region
                })}`;

            default:
                return 'Free shipping';
        }
    }, [discounts, region]);

    const removeGiftCardCode = async (code: string) => {
        await removeGiftCard(code, gift_cards);
    };

    const removeDiscountCode = async () => {
        await removeDiscount(discounts[0].code);
    };

    const [message, formAction] = useFormState(submitDiscountForm, null);

    return (
        <div className="w-full bg-white flex flex-col">
            <div className="txt-medium">
                {gift_cards.length > 0 && (
                    <div className="flex flex-col mb-4">
                        <Heading className="txt-medium">
                            Gift card(s) applied:
                        </Heading>
                        {gift_cards?.map((gc) => (
                            <div
                                className="flex items-center justify-between txt-small-plus"
                                key={gc.id}
                            >
                                <Text className="flex gap-x-1 items-baseline">
                                    <span>Code: </span>
                                    <span className="truncate">{gc.code}</span>
                                </Text>
                                <Text className="font-semibold">
                                    {formatAmount({
                                        region: region,
                                        amount: gc.balance,
                                        includeTaxes: false
                                    })}
                                </Text>
                                <button
                                    className="flex items-center gap-x-2 !background-transparent !border-none"
                                    onClick={() => removeGiftCardCode(gc.code)}
                                >
                                    <Trash size={14} />
                                    <span className="sr-only">
                                        Remove gift card from order
                                    </span>
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {appliedDiscount ? (
                    <div className="w-full flex items-center">
                        <div className="flex flex-col w-full">
                            <Heading className="txt-medium">
                                Discount applied:
                            </Heading>
                            <div className="flex items-center justify-between w-full max-w-full">
                                <Text className="flex gap-x-1 items-baseline txt-small-plus w-4/5 pr-1">
                                    <span>Code:</span>
                                    <span className="truncate">
                                        {discounts[0].code}
                                    </span>
                                    <span className="min-w-fit">
                                        ({appliedDiscount})
                                    </span>
                                </Text>
                                <button
                                    className="flex items-center"
                                    onClick={removeDiscountCode}
                                >
                                    <Trash size={14} />
                                    <span className="sr-only">
                                        Remove discount code from order
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <form action={formAction} className="w-full">
                        <Label className="flex gap-x-1 my-2 items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="txt-medium text-ui-fg-interactive hover:text-ui-fg-interactive-hover"
                            >
                                Add gift card or discount code
                            </button>
                            <Tooltip content="You can add multiple gift cards, but only one discount code.">
                                <InformationCircleSolid color="var(--fg-muted)" />
                            </Tooltip>
                        </Label>
                        {isOpen && (
                            <>
                                <div className="flex w-full gap-x-2 items-center">
                                    <Input
                                        label="Please enter code"
                                        name="code"
                                        type="text"
                                        autoFocus={false}
                                    />
                                    <SubmitButton variant="secondary">
                                        Apply
                                    </SubmitButton>
                                </div>
                                <ErrorMessage error={message} />
                            </>
                        )}
                    </form>
                )}
            </div>
        </div>
    );
};
