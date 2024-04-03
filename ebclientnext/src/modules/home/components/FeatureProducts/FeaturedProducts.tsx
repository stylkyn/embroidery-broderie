import { Region } from '@medusajs/medusa';

import { ProductCollectionWithPreviews } from 'types/global';
import { ProductRail } from './ProductRail';

export const FeaturedProducts = ({
    collections,
    region
}: {
    collections: ProductCollectionWithPreviews[];
    region: Region;
}) => {
    return collections.map((collection) => (
        <li key={collection.id}>
            <ProductRail collection={collection} region={region} />
        </li>
    ));
};
