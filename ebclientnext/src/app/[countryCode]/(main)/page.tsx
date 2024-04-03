import { getRegion } from '@lib/medusajs';
import { FeaturedProducts, Hero } from '@modules/home';
import { getCollectionsWithProducts } from './page.utils';

export { metadata } from './page.metadata';

export default async function Home({
    params: { countryCode }
}: {
    params: { countryCode: string };
}) {
    const collections = await getCollectionsWithProducts(countryCode);
    const region = await getRegion(countryCode);

    if (!collections || !region) {
        return null;
    }

    return (
        <>
            <Hero />
            <div className="py-12">
                <ul className="flex flex-col gap-x-6">
                    <FeaturedProducts
                        collections={collections}
                        region={region}
                    />
                </ul>
            </div>
        </>
    );
}
