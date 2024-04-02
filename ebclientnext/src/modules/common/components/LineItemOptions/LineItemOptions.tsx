import { Text } from '@medusajs/ui';
import { LineItemOptionsProps } from './LineItemOptions.types';

export const LineItemOptions = ({ variant }: LineItemOptionsProps) => {
    return (
        <Text className="inline-block txt-medium text-ui-fg-subtle w-full overflow-hidden text-ellipsis">
            Variant: {variant.title}
        </Text>
    );
};
