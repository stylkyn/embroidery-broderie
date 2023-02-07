import { type Category } from '../../strapi';

export interface CategoryContext {
    category?: Category;
}

export interface CategoryContextProviderProps {
    category?: Category;
}
