import { Region } from '@medusajs/medusa';
import { ProductPreviewType } from 'types/global';

export interface ProductPreviewProps {
    productPreview: ProductPreviewType;
    isFeatured?: boolean;
    region: Region;
}
