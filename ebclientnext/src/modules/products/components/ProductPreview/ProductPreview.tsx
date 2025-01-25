import { Text } from '@medusajs/ui';

import { retrievePricedProductById } from '@lib/medusajs';
import { getProductPrice } from '@lib/util/get-product-price';
import { Thumbnail } from '../Thumbnail';
import { ProductPreviewProps } from './ProductPreview.types';
import { PreviewPrice } from './PreviewPrice';
import { LocalizedClientLink } from '@modules/common/components/LocalizedClientLink';

export const ProductPreview = async ({
    productPreview,
    isFeatured,
    region
}: ProductPreviewProps) => {
    const pricedProduct = await retrievePricedProductById({
        id: productPreview.id,
        regionId: region.id
    }).then((product) => product);

    if (!pricedProduct) {
        return null;
    }

    const { cheapestPrice } = getProductPrice({
        product: pricedProduct,
        region
    });

    return (
        <LocalizedClientLink
            href={`/products/${productPreview.handle}`}
            className="group"
        >
            <div>
                <Thumbnail
                    thumbnail={productPreview.thumbnail}
                    size="full"
                    isFeatured={isFeatured}
                />
                <div className="flex txt-compact-medium mt-4 justify-between">
                    <Text className="text-ui-fg-subtle">
                        {productPreview.title}
                    </Text>
                    <div className="flex items-center gap-x-2">
                        {cheapestPrice && (
                            <PreviewPrice price={cheapestPrice} />
                        )}
                    </div>
                </div>
            </div>
        </LocalizedClientLink>
    );
};
