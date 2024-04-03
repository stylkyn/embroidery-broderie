import { Region } from '@medusajs/medusa';
import { NativeSelectProps } from '@modules/common';

export type CountrySelectProps = NativeSelectProps & {
    region?: Region;
};
