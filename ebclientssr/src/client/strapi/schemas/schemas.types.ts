import { type Category } from './Category/Category.types';
import { type Product } from './Product/Product.types';

export type StrapiEntityTypes = 'category' | 'product';
export type StrapiEntities = Category | Product;

export interface StrapiSchemasMapper {
    category: Category;
    product: Product;
}
