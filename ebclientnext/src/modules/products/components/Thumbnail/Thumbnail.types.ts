import { Image as MedusaImage } from '@medusajs/medusa';

export interface ThumbnailProps {
    thumbnail?: string | null;
    images?: MedusaImage[] | null;
    size?: 'small' | 'medium' | 'large' | 'full' | 'square';
    isFeatured?: boolean;
    className?: string;
}
