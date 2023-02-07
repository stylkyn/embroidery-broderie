import { type Category } from '../../strapi/schemas/Category/Category.types';

export interface CategoriesStore {
    categories: Category[];
    loading: boolean;
}
