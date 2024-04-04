import { Region } from '@medusajs/medusa';
import { StateType } from '@lib/hooks/use-toggle-state';

export interface CountryOption {
    country: string;
    region: string;
    label: string;
}

export interface CountrySelectProps {
    toggleState: StateType;
    regions: Region[];
}
