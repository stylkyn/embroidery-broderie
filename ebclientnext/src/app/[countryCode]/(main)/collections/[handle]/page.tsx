import { notFound } from 'next/navigation';

import { getCollectionByHandle } from '@lib/medusajs';
import { Props } from './page.types';
import { CollectionTemplate } from '@modules/collections/templates/CollectionTemplate';

export { generateMetadata } from './page.metadata';
export { generateStaticParams } from './page.static-params';
// TODO: Zjistit jestli ma najaky vyznam
export { PRODUCT_LIMIT } from './page.consts';

export default async function CollectionPage({ params, searchParams }: Props) {
    const { sortBy, page } = searchParams;

    const collection = await getCollectionByHandle(params.handle).then(
        (collection) => collection
    );

    if (!collection) {
        notFound();
    }

    return (
        <CollectionTemplate
            collection={collection}
            page={page}
            sortBy={sortBy}
            countryCode={params.countryCode}
        />
    );
}
