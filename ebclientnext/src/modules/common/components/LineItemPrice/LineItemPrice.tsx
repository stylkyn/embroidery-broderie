import { formatAmount } from '@lib/util/prices';
import { clx } from '@medusajs/ui';

import { getPercentageDiff } from '@lib/util/get-precentage-diff';
import { CalculatedVariant } from 'types/medusa';
import { LineItemPriceProps } from './LineItemPrice.types';

export const LineItemPrice = ({
    item,
    region,
    style = 'default'
}: LineItemPriceProps) => {
    const originalPrice =
        (item.variant as CalculatedVariant).original_price * item.quantity;
    const hasReducedPrice = (item.total || 0) < originalPrice;

    return (
        <div className="flex flex-col gap-x-2 text-ui-fg-subtle items-end">
            <div className="text-left">
                {hasReducedPrice && (
                    <>
                        <p>
                            {style === 'default' && (
                                <span className="text-ui-fg-subtle">
                                    Original:{' '}
                                </span>
                            )}
                            <span className="line-through text-ui-fg-muted">
                                {formatAmount({
                                    amount: originalPrice,
                                    region: region,
                                    includeTaxes: false
                                })}
                            </span>
                        </p>
                        {style === 'default' && (
                            <span className="text-ui-fg-interactive">
                                -
                                {getPercentageDiff(
                                    originalPrice,
                                    item.total || 0
                                )}
                                %
                            </span>
                        )}
                    </>
                )}
                <span
                    className={clx('text-base-regular', {
                        'text-ui-fg-interactive': hasReducedPrice
                    })}
                >
                    {formatAmount({
                        amount: item.total || 0,
                        region: region,
                        includeTaxes: false
                    })}
                </span>
            </div>
        </div>
    );
};
