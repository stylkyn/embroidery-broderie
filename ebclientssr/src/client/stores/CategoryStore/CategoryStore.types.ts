import { type Category } from '../../strapi/schemas/Category.types';

export interface CategoryStore {
    categories: Category[];
    loading: boolean;
}
