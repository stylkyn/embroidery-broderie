import { type Page } from 'client/strapi/schemas/Page/Page.types';

export interface HeaderNavbarItemProps {
	page: Page;
	isFixed?: boolean;
}
