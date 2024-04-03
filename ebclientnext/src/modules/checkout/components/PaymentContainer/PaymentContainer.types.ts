import { PaymentSession } from '@medusajs/medusa';

export interface PaymentContainerProps {
    paymentSession: PaymentSession;
    selectedPaymentOptionId: string | null;
    disabled?: boolean;
    paymentInfoMap: Record<string, { title: string; icon: JSX.Element }>;
}
