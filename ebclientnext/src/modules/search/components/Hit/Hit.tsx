import { Container, Text } from '@medusajs/ui';

import { Thumbnail } from '@modules/products';
import { LocalizedClientLink } from '@modules/common';
import { HitProps } from './Hit.types';

export const Hit = ({ hit }: HitProps) => {
    return (
        <LocalizedClientLink href={`/products/${hit.handle}`}>
            <Container
                key={hit.id}
                className="flex sm:flex-col gap-2 w-full p-4 shadow-elevation-card-rest hover:shadow-elevation-card-hover items-center sm:justify-center"
            >
                <Thumbnail
                    thumbnail={hit.thumbnail}
                    size="square"
                    className="group h-12 w-12 sm:h-full sm:w-full"
                />
                <div className="flex flex-col justify-between group">
                    <div className="flex flex-col">
                        <Text className="text-ui-fg-subtle">{hit.title}</Text>
                    </div>
                </div>
            </Container>
        </LocalizedClientLink>
    );
};
