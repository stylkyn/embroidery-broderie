import { type Page } from '../../strapi';

export interface PageContext {
	page?: Page;
}

export interface PageContextProviderProps {
	page?: Page;
}
