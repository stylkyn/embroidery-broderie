import { type Product } from 'client/strapi';

export interface ProductStore {
	products: Product[];
	loading: boolean;
}
