import { type Category } from 'client/strapi';

export const findActiveCategory = (
	categories: Category[],
	categoryUrl?: string
): Category | undefined => {
	if (!categories.length || !categoryUrl) {
		return undefined;
	}

	const activeCategory = categories.find((c) => c.url === categoryUrl);
	if (activeCategory) {
		return activeCategory;
	}

	return categories
		.map((c) => findActiveCategory(c.categories, categoryUrl))
		.find((c) => c);
};
