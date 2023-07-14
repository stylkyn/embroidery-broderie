import { type Category } from './Category/Category.types';
import { type Product } from './Product/Product.types';
import { type Article } from './Article/Article.types';

export type StrapiEntityTypes = 'category' | 'product' | 'article';
export type StrapiEntities = Category | Product | Article;

export interface StrapiSchemasMapper {
	category: Category;
	article: Article;
	product: Product;
}
