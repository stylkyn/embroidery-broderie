import { Text, clx } from '@medusajs/ui';
import { PreviewPriceProps } from './PreviewPrice.types';

export const PreviewPrice = ({ price }: PreviewPriceProps) => {
    return (
        <>
            {price.price_type === 'sale' && (
                <Text className="line-through text-ui-fg-muted">
                    {price.original_price}
                </Text>
            )}
            <Text
                className={clx('text-ui-fg-muted', {
                    'text-ui-fg-interactive': price.price_type === 'sale'
                })}
            >
                {price.calculated_price}
            </Text>
        </>
    );
};
