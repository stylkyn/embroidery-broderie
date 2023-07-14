import { type Article } from '../../strapi/schemas/Article/Article.types';

export interface PagesStore {
	pages: Article[];
	loading: boolean;
}
