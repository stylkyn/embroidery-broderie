import { useStrapi } from '../../strapi';
import { createContext, useContext } from 'react';
import { type PagesStore } from './PagesStore.types';
import { ARTICLE_ATTR } from 'client/strapi/schemas/Article/Article.consts';
import { PAGE_ATTR } from 'client/strapi/schemas/Page/Page.consts';
import { type Filters } from 'client/strapi/queryBuilder/filters/filters.types';

const PagesStoreContext = createContext<PagesStore>({
	pages: [],
	loading: false,
});

export const PagesStoreProvider: FCC<{ filters: Filters<'page'> }> = ({
	children,
	filters,
}) => {
	const { data, loading } = useStrapi({
		entityType: 'page',
		attributes: {
			...PAGE_ATTR,
			article: ARTICLE_ATTR,
			pages: PAGE_ATTR,
			parent_page: PAGE_ATTR,
		},
		filters,
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
