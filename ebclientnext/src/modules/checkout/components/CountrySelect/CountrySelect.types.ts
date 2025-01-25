import { Region } from '@medusajs/medusa';
import { NativeSelectProps } from '@modules/common/components/NativeSelect';

export type CountrySelectProps = NativeSelectProps & {
    region?: Region;
};
