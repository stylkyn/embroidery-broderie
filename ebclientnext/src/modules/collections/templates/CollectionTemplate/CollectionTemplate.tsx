import { Suspense } from 'react';

import SkeletonProductGrid from '@modules/skeletons/templates/SkeletonProductGrid';
import RefinementList from '@modules/store/components/Refinement-list';
import PaginatedProducts from '@modules/store/templates/paginated-products';
import { CollectionTemplateProps } from './CollectionTemplate.types';

export default function CollectionTemplate({
    sortBy,
    collection,
    page,
    countryCode
}: CollectionTemplateProps) {
    const pageNumber = page ? parseInt(page) : 1;

    return (
        <div className="flex flex-col small:flex-row small:items-start py-6 content-container">
            <RefinementList sortBy={sortBy || 'created_at'} />
            <div className="w-full">
                <div className="mb-8 text-2xl-semi">
                    <h1>{collection.title}</h1>
                </div>
                <Suspense fallback={<SkeletonProductGrid />}>
                    <PaginatedProducts
                        sortBy={sortBy || 'created_at'}
                        page={pageNumber}
                        collectionId={collection.id}
                        countryCode={countryCode}
                    />
                </Suspense>
            </div>
        </div>
    );
}
