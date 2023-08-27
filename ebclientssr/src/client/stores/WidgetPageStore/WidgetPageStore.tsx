import { CATEGORY_ATTR, PRODUCT_ATTR, useStrapi } from '../../strapi';
import { createContext, useContext } from 'react';
import { type WidgetPageStore } from './WidgetPageStore.types';
import { ARTICLE_ATTR } from 'client/strapi/schemas/Article/Article.consts';
import { PAGE_ATTR } from 'client/strapi/schemas/Page/Page.consts';
import { type Filters } from 'client/strapi/queryBuilder/filters/filters.types';
import { WIDGET_CATEGORY_CARD_ATTR } from 'client/strapi/schemas/Widget/WidgetCategoryCard/WidgetCategoryCard.consts';
import { WIDGET_PRODUCT_CARD_ATTR } from 'client/strapi/schemas/Widget/WidgetProductCard/WidgetProductCard.consts';

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
				isDynamicContent: true,
				ComponentWidgetsCategoryCards: {
					...WIDGET_CATEGORY_CARD_ATTR,
					categories: CATEGORY_ATTR,
				},
				ComponentWidgetsProductsCards: {
					...WIDGET_PRODUCT_CARD_ATTR,
					products: PRODUCT_ATTR,
				},
				// TODO: Vyresit any, tady nejak obecne vymyslet praci s dotazovanim an dynamic content (result funguje dobre)
			} as any,
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
