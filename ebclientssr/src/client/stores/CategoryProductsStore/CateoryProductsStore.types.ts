import { type Product } from '../../strapi';

export interface CategoryProductsStoreProviderProps {
    categoryUrl?: string;
}

export interface CategoryProductsStore {
    products: Product[];
    loading: boolean;
}
