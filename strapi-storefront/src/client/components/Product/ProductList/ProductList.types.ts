import { type Product } from '../../../strapi';

export interface ProductListProps {
	getProductsFn: () => { products: Product[] };
}
