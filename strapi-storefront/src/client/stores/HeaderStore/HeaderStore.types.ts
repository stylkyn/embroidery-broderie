import { type Header } from 'client/strapi/schemas/Header/Header.types';

export interface HeaderStore {
	header: Header;
	loading: boolean;
}
