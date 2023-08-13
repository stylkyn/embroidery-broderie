import { CATEGORY_ATTR, useStrapi } from '../../strapi';
import { createContext, useContext } from 'react';
import { type WidgetPageStore } from './WidgetPageStore.types';
import { ARTICLE_ATTR } from 'client/strapi/schemas/Article/Article.consts';
import { PAGE_ATTR } from 'client/strapi/schemas/Page/Page.consts';
import { type Filters } from 'client/strapi/queryBuilder/filters/filters.types';
import { WIDGET_ATTR } from 'client/strapi/schemas/Widget/Widget.consts';

const WidgetPageStoreContext = createContext<WidgetPageStore>({
	widgetPage: undefined,
	loading: false,
});

export const WidgetPageStoreProvider: FCC<{ filters: Filters<'page'> }> = ({
	children,
	filters,
}) => {
	const { data, loading } = useStrapi({
		entityType: 'page',
		attributes: {
			...PAGE_ATTR,
			article: ARTICLE_ATTR,
			widgets: {
				...WIDGET_ATTR,
				articles: ARTICLE_ATTR,
				categories: CATEGORY_ATTR,
			},
		},
		filters,
	});

	return (
		<WidgetPageStoreContext.Provider
			value={{
				widgetPage: data[0],
				loading,
			}}
		>
			{children}
		</WidgetPageStoreContext.Provider>
	);
};

export const useWidgetPageStore = (): WidgetPageStore =>
	useContext(WidgetPageStoreContext);
