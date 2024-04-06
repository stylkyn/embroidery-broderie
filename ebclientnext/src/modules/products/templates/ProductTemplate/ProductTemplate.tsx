import React, { Suspense } from 'react';

import { SkeletonRelatedProducts } from '@modules/skeletons';
import { notFound } from 'next/navigation';
import { ProductTemplateProps } from './ProductTemplate.types';

import {
    ImageGallery,
    ProductActions,
    ProductOnboardingCta,
    ProductTabs,
    RelatedProducts
} from '@modules/products';
import { ProductInfo } from '../ProductInfo';
import { ProductActionsWrapper } from '../ProductActionsWrapper';

export const ProductTemplate: React.FC<ProductTemplateProps> = ({
    product,
    region,
    countryCode
}) => {
    if (!product || !product.id) {
        return notFound();
    }

    return (
        <>
            <div className="content-container flex flex-col small:flex-row small:items-start py-6 relative">
                <div className="flex flex-col small:sticky small:top-48 small:py-0 small:max-w-[300px] w-full py-8 gap-y-6">
                    <ProductInfo product={product} />
                    <ProductTabs product={product} />
                </div>
                <div className="block w-full relative">
                    <ImageGallery images={product?.images || []} />
                </div>
                <div className="flex flex-col small:sticky small:top-48 small:py-0 small:max-w-[300px] w-full py-8 gap-y-12">
                    <ProductOnboardingCta />
                    <Suspense
                        fallback={
                            <ProductActions product={product} region={region} />
                        }
                    >
                        <ProductActionsWrapper
                            id={product.id}
                            region={region}
                        />
                    </Suspense>
                </div>
            </div>
            <div className="content-container my-16 small:my-32">
                <Suspense fallback={<SkeletonRelatedProducts />}>
                    <RelatedProducts
                        product={product}
                        countryCode={countryCode}
                    />
                </Suspense>
            </div>
        </>
    );
};
