import { Container, clx } from '@medusajs/ui';
import React from 'react';

import { ThumbnailProps } from './Thumbnail.types';
import { ImageOrPlaceholder } from './Thumbnail.components';

export const Thumbnail: React.FC<ThumbnailProps> = ({
    thumbnail,
    images,
    size = 'small',
    isFeatured,
    className
}) => {
    const initialImage = thumbnail || images?.[0]?.url;

    return (
        <Container
            className={clx(
                'relative w-full overflow-hidden p-4 bg-ui-bg-subtle shadow-elevation-card-rest rounded-large group-hover:shadow-elevation-card-hover transition-shadow ease-in-out duration-150',
                className,
                {
                    'aspect-[11/14]': isFeatured,
                    'aspect-[9/16]': !isFeatured && size !== 'square',
                    'aspect-[1/1]': size === 'square',
                    'w-[180px]': size === 'small',
                    'w-[290px]': size === 'medium',
                    'w-[440px]': size === 'large',
                    'w-full': size === 'full'
                }
            )}
        >
            <ImageOrPlaceholder image={initialImage} size={size} />
        </Container>
    );
};
