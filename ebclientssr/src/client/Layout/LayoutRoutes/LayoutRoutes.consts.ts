import { type PageType } from 'client/strapi/schemas/Page/Page.types';

export const PAGE_TYPE_MAPPER: Record<PageType, string> = {
	article_page: 'article',
	widget_page: 'page',
};
