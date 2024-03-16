import { getCategoryByHandle } from '@lib/data'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Props } from './page.types'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    try {
        const { product_categories } = await getCategoryByHandle(
            params.category
        ).then((product_categories) => product_categories)

        const title = product_categories
            .map((category) => category.name)
            .join(' | ')

        const description =
			product_categories[product_categories.length - 1].description ??
			`${title} category.`

        return {
            title: `${title} | Medusa Store`,
            description,
            alternates: {
                canonical: `${params.category.join('/')}`,
            },
        }
    } catch (error) {
        notFound()
    }
}
