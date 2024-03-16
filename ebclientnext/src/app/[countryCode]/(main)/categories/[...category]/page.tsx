import { notFound } from "next/navigation"
import { Props } from "./page.types"

import { getCategoryByHandle } from "@lib/data"
import CategoryTemplate from "@modules/categories/templates"

export { generateStaticParams } from './page.static-params';
export { generateMetadata } from './page.metadata';

export default async function CategoryPage({ params, searchParams }: Props) {
    const { sortBy, page } = searchParams

    const { product_categories } = await getCategoryByHandle(
        params.category
    ).then((product_categories) => product_categories)

    if (!product_categories) {
        notFound()
    }

    return (
        <CategoryTemplate
            categories={product_categories}
            sortBy={sortBy}
            page={page}
            countryCode={params.countryCode}
        />
    )
}
