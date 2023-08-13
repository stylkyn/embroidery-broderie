import { type Category } from '../Category/Category.types';
import { type Article } from '../Article/Article.types';

export type WidgetType = 'product' | 'article' | 'category';

export interface Widget {
	id: string;
	name: string;
	description: string;
	url: string;
	categories?: Category[];
	articles?: Article[];
	type: WidgetType;
}
