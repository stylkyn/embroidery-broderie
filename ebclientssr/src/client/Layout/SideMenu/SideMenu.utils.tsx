import { type Category } from '../../strapi';

export const categoriesToMenuItems = (categories: Category[]): any =>
	(categories ?? []).map((category) => ({
		key: category.url,
		label: category.name,
		// children: category.categories && categoriesToMenuItems(category.categories),
	}));
