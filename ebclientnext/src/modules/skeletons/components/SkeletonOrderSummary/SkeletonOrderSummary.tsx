import { SkeletonButton } from '@modules/skeletons/components/SkeletonButton';
import { SkeletonCartTotals } from '@modules/skeletons/components/SkeletonCartTotals';

export const SkeletonOrderSummary = () => {
    return (
        <div className="grid-cols-1">
            <SkeletonCartTotals header={false} />
            <div className="mt-4">
                <SkeletonButton />
            </div>
        </div>
    );
};
