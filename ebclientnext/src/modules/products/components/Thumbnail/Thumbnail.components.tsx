import { ThumbnailProps } from './Thumbnail.types';
import Image from 'next/image';
import React from 'react';

import PlaceholderImage from '@modules/common/icons/placeholder-image';

export const ImageOrPlaceholder = ({
    image,
    size
}: Pick<ThumbnailProps, 'size'> & { image?: string }) => {
    return image ? (
        <Image
            src={image}
            alt="Thumbnail"
            className="absolute inset-0 object-cover object-center"
            draggable={false}
            quality={50}
            sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
            fill
        />
    ) : (
        <div className="w-full h-full absolute inset-0 flex items-center justify-center">
            <PlaceholderImage size={size === 'small' ? 16 : 24} />
        </div>
    );
};
