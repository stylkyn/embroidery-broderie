import { ARTICLE_ATTR, useStrapi } from '../../strapi';
import { createContext, useContext } from 'react';
import { type ArticlesStore } from './ArticleStore.types';
import { type Filters } from 'client/strapi/queryBuilder/filters/filters.types';

const ArticlesStoreContext = createContext<ArticlesStore>({
	articles: [],
	loading: false,
});

export const ArticlesStoreProvider: FCC<{ filters: Filters<'article'> }> = ({
	children,
	filters,
}) => {
	const { data, loading } = useStrapi({
		entityType: 'article',
		attributes: {
			...ARTICLE_ATTR,
			articles: {
				...ARTICLE_ATTR,
				parent_article: ARTICLE_ATTR,
			},
			parent_article: ARTICLE_ATTR,
		},
		filters,
	});

	return (
		<ArticlesStoreContext.Provider
			value={{
				articles: data,
				loading,
			}}
		>
			{children}
		</ArticlesStoreContext.Provider>
	);
};

export const useArticleStore = (): ArticlesStore =>
	useContext(ArticlesStoreContext);
