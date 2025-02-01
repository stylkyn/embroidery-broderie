import { type Page } from '../../strapi/schemas/Page/Page.types';

export interface WidgetPageStore {
	widgetPage?: Page;
	loading: boolean;
}
