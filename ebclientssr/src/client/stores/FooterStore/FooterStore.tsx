import { useStrapi } from '../../strapi';
import { createContext, useContext } from 'react';
import { type FooterStore } from './FooterStore.types';
import { FOOTER_ATTR } from 'client/strapi/schemas/Footer/Footer.consts';
import { PAGE_ATTR } from 'client/strapi/schemas/Page/Page.consts';
import { type Footer } from 'client/strapi/schemas/Footer/Footer.types';

const FooterStoreContext = createContext<FooterStore>({
	// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
	footer: {} as Footer,
	loading: false,
});

export const FooterStoreProvider: FCC = ({ children }) => {
	const { data, loading } = useStrapi({
		entityType: 'footer',
		attributes: {
			...FOOTER_ATTR,
			box1_pages: PAGE_ATTR,
			box2_pages: PAGE_ATTR,
		},
	});

	return (
		<FooterStoreContext.Provider
			value={{
				// Kuvli pouziti single types
				footer: data as unknown as Footer,
				loading,
			}}
		>
			{children}
		</FooterStoreContext.Provider>
	);
};

export const useFooterStore = (): FooterStore => useContext(FooterStoreContext);
