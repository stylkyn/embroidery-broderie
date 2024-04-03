import { Badge } from '@medusajs/ui';
import { PaymentTestProps } from './PaymentTest.types';

export const PaymentTest = ({ className }: PaymentTestProps) => {
    return (
        <Badge color="orange" className={className}>
            <span className="font-semibold">Attention:</span> For testing
            purposes only.
        </Badge>
    );
};
