import { type Article } from '../../strapi';

export interface ArticleContext {
	article?: Article;
}

export interface ArticleContextProviderProps {
	article?: Article;
}
