import { Suspense } from 'react';


import { PaginatedProducts } from '../PaginatedProducts/PaginatedProducts';
import { SkeletonProductGrid } from '@modules/skeletons/templates/SkeletonProductGrid';
import { RefinementList, SortOptions } from '@modules/store/components/RefinementList';

export const StoreTemplate = ({
    sortBy,
    page,
    countryCode
}: {
    sortBy?: SortOptions;
    page?: string;
    countryCode: string;
}) => {
    const pageNumber = page ? parseInt(page) : 1;

    return (
        <div className="flex flex-col small:flex-row small:items-start py-6 content-container">
            <RefinementList sortBy={sortBy || 'created_at'} />
            <div className="w-full">
                <div className="mb-8 text-2xl-semi">
                    <h1>All products</h1>
                </div>
                <Suspense fallback={<SkeletonProductGrid />}>
                    <PaginatedProducts
                        sortBy={sortBy || 'created_at'}
                        page={pageNumber}
                        countryCode={countryCode}
                    />
                </Suspense>
            </div>
        </div>
    );
};
