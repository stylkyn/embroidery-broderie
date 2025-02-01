import { type Page } from 'client/strapi';

export interface ListMenuProps {
    title: string;
    pages: Page[];
}
