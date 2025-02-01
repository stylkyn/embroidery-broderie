import { type Article } from '../../strapi/schemas/Article/Article.types';

export interface ArticlesStore {
	articles: Article[];
	loading: boolean;
}
