import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getCollectionByHandle } from '@lib/medusajs';
import { Props } from './page.types';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const collection = await getCollectionByHandle(params.handle);

    if (!collection) {
        notFound();
    }

    const metadata = {
        title: `${collection.title} | Medusa Store`,
        description: `${collection.title} collection`
    } as Metadata;

    return metadata;
}
