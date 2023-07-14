import { CATEGORY_ATTR, useStrapi } from '../../strapi';
import { createContext, useContext } from 'react';
import { type PagesStore } from './PagesStore.types';
import { ARTICLE_ATTR } from 'client/strapi/schemas/Article/Article.consts';

const PagesStoreContext = createContext<PagesStore>({
	pages: [],
	loading: false,
});

export const PagesStoreProvider: FCC = ({ children }) => {
	const { data, loading } = useStrapi({
		entityType: 'article',
		attributes: {
			...ARTICLE_ATTR,
			articles: {
				...ARTICLE_ATTR,
				parent_article: CATEGORY_ATTR,
			},
			parent_article: ARTICLE_ATTR,
		},
		filters: {
			type: 'page',
			parent_article: {
				id: {
					null: true,
				},
			},
		},
	});

	return (
		<PagesStoreContext.Provider
			value={{
				pages: data,
				loading,
			}}
		>
			{children}
		</PagesStoreContext.Provider>
	);
};

export const usePagesStore = (): PagesStore => useContext(PagesStoreContext);
