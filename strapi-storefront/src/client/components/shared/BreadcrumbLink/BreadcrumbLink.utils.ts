import { type Category } from 'client/strapi';

export const getParentCategories = (category?: Category, result: Category[] = []): Category[] => {
    if (!category?.parent_category?.id) {
        return result;
    }
    return getParentCategories(category.parent_category, [category.parent_category, ...result]);
}
