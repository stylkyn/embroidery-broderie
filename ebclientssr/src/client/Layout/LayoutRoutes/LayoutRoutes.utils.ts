import { type Page } from 'client/strapi/schemas/Page/Page.types';
import { PAGE_TYPE_MAPPER } from './LayoutRoutes.consts';

export const buildCategoryPath = (categoryUrl: string): string => {
	return `/category/${categoryUrl}`;
};

export const buildHomePath = (): string => {
	return '/';
};

export const buildArticlePath = (articleUrl: string): string => {
	return `/article/${articleUrl}`;
};

export const buildPagePath = (page: Page): string => {
	return `/${PAGE_TYPE_MAPPER[page.type]}/${page.url}`;
};
