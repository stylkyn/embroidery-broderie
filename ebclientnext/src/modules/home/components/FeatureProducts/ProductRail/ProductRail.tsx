import { Region } from '@medusajs/medusa';
import { Text } from '@medusajs/ui';
import { InteractiveLink } from '@modules/common/components/InteractiveLink';
import { ProductPreview } from '@modules/products/components/ProductPreview';
import { ProductCollectionWithPreviews } from 'types/global';

export const ProductRail = ({
    collection,
    region
}: {
    collection: ProductCollectionWithPreviews;
    region: Region;
}) => {
    const { products } = collection;

    if (!products) {
        return null;
    }

    return (
        <div className="content-container py-12 small:py-24">
            <div className="flex justify-between mb-8">
                <Text className="txt-xlarge">{collection.title}</Text>
                <InteractiveLink href={`/collections/${collection.handle}`}>
                    View all
                </InteractiveLink>
            </div>
            <ul className="grid grid-cols-2 small:grid-cols-3 gap-x-6 gap-y-24 small:gap-y-36">
                {products &&
                    products.map((product) => (
                        <li key={product.id}>
                            <ProductPreview
                                productPreview={product}
                                region={region}
                                isFeatured
                            />
                        </li>
                    ))}
            </ul>
        </div>
    );
};
