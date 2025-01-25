import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import { SkeletonProductGrid } from '@modules/skeletons/templates/SkeletonProductGrid';
import { LocalizedClientLink } from '@modules/common/components/LocalizedClientLink';
import { CategoryTemplateProps } from './CategoryTemplate.types';
import { InteractiveLink } from '@modules/common/components/InteractiveLink';
import { PaginatedProducts } from '@modules/store/templates/PaginatedProducts';
import { RefinementList } from '@modules/store/components/RefinementList';

export const CategoryTemplate = ({
    categories,
    sortBy,
    page,
    countryCode
}: CategoryTemplateProps) => {
    const pageNumber = page ? parseInt(page) : 1;

    const category = categories[categories.length - 1];
    const parents = categories.slice(0, categories.length - 1);

    if (!category || !countryCode) {
        notFound();
    }

    return (
        <div className="flex flex-col small:flex-row small:items-start py-6 content-container">
            <RefinementList sortBy={sortBy || 'created_at'} />
            <div className="w-full">
                <div className="flex flex-row mb-8 text-2xl-semi gap-4">
                    {parents &&
                        parents.map((parent) => (
                            <span key={parent.id} className="text-ui-fg-subtle">
                                <LocalizedClientLink
                                    className="mr-4 hover:text-black"
                                    href={`/categories/${parent.handle}`}
                                >
                                    {parent.name}
                                </LocalizedClientLink>
                                /
                            </span>
                        ))}
                    <h1>{category.name}</h1>
                </div>
                {category.description && (
                    <div className="mb-8 text-base-regular">
                        <p>{category.description}</p>
                    </div>
                )}
                {category.category_children && (
                    <div className="mb-8 text-base-large">
                        <ul className="grid grid-cols-1 gap-2">
                            {category.category_children?.map((c) => (
                                <li key={c.id}>
                                    <InteractiveLink
                                        href={`/categories/${c.handle}`}
                                    >
                                        {c.name}
                                    </InteractiveLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <Suspense fallback={<SkeletonProductGrid />}>
                    <PaginatedProducts
                        sortBy={sortBy || 'created_at'}
                        page={pageNumber}
                        categoryId={category.id}
                        countryCode={countryCode}
                    />
                </Suspense>
            </div>
        </div>
    );
};
