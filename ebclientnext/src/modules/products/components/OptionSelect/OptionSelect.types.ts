import { ProductOption } from '@medusajs/medusa';

export interface OptionSelectProps {
    option: ProductOption;
    current: string;
    updateOption: (option: Record<string, string>) => void;
    title: string;
}
