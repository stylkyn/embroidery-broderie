import { type Footer } from 'client/strapi/schemas/Footer/Footer.types';

export interface FooterStore {
	footer: Footer;
	loading: boolean;
}
