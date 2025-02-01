import { type Widget } from '../Widget/Widget.types';
import { type Article } from '../Article/Article.types';

export type PageType = 'article_page' | 'widget_page';

export interface Page {
	id: string;
	name: string;
	description: string;
	url: string;
	widgets?: Widget[];
	article?: Article;
	type: PageType;
	pages?: Page[];
	parent_page?: Page;
}
