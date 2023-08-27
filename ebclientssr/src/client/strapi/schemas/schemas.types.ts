import { type Category } from './Category/Category.types';
import { type Product } from './Product/Product.types';
import { type Article } from './Article/Article.types';
import { type Widget } from './Widget/Widget.types';
import { type Page } from './Page/Page.types';
import { type Header } from './Header/Header.types';
import { type Footer } from './Footer/Footer.types';
import { type WidgetCategoryCard } from './Widget/WidgetCategoryCard/WidgetCategoryCard.types';
import { type WidgetProductCard } from './Widget/WidgetProductCard/WidgetProductCard.types';

export type StrapiEntityTypes =
	| 'header'
	| 'footer'
	| 'page'
	| 'widget'
	| 'category'
	| 'product'
	| 'article'
	| 'widget_category_card'
	| 'widget_product_card';

export type StrapiEntities =
	| Header
	| Footer
	| Page
	| Category
	| Product
	| Article
	| Widget
	| WidgetCategoryCard
	| WidgetProductCard;

export interface StrapiSchemasMapper {
	footer: Footer;
	header: Header;
	category: Category;
	article: Article;
	product: Product;
	page: Page;
	widget: Widget;
	widget_category_card: WidgetCategoryCard;
	widget_product_card: WidgetProductCard;
}
