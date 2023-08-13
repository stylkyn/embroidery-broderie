import { type Category } from './Category/Category.types';
import { type Product } from './Product/Product.types';
import { type Article } from './Article/Article.types';
import { type Widget } from './Widget/Widget.types';
import { type Page } from './Page/Page.types';
import { type Header } from './Header/Header.types';
import { type Footer } from './Footer/Footer.types';

export type StrapiEntityTypes =
	| 'header'
	| 'footer'
	| 'page'
	| 'widget'
	| 'category'
	| 'product'
	| 'article';
export type StrapiEntities =
	| Header
	| Footer
	| Page
	| Category
	| Product
	| Article
	| Widget;

export interface StrapiSchemasMapper {
	footer: Footer;
	header: Header;
	category: Category;
	article: Article;
	product: Product;
	page: Page;
	widget: Widget;
}
