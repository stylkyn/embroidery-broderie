import { Heading, Text } from '@medusajs/ui';
import { LocalizedClientLink } from '@modules/common';
import { ProductInfoProps } from './ProductInfo.types';

export const ProductInfo = ({ product }: ProductInfoProps) => {
    return (
        <div id="product-info">
            <div className="flex flex-col gap-y-4 lg:max-w-[500px] mx-auto">
                {product.collection && (
                    <LocalizedClientLink
                        href={`/collections/${product.collection.handle}`}
                        className="text-medium text-ui-fg-muted hover:text-ui-fg-subtle"
                    >
                        {product.collection.title}
                    </LocalizedClientLink>
                )}
                <Heading
                    level="h2"
                    className="text-3xl leading-10 text-ui-fg-base"
                >
                    {product.title}
                </Heading>

                <Text className="text-medium text-ui-fg-subtle">
                    {product.description}
                </Text>
            </div>
        </div>
    );
};
