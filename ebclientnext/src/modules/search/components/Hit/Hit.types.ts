import { ProductVariant } from '@medusajs/medusa';

export interface HitProps {
    hit: ProductHit;
}

export interface ProductHit {
    id: string;
    title: string;
    handle: string;
    description: string | null;
    thumbnail: string | null;
    variants: ProductVariant[];
    collection_handle: string | null;
    collection_id: string | null;
}
