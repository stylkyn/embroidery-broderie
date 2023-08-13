import { type Page } from '../../strapi/schemas/Page/Page.types';

export interface PagesStore {
	pages: Page[];
	loading: boolean;
}
