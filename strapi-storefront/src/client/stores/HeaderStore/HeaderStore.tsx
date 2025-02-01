import { useStrapi } from '../../strapi';
import { createContext, useContext } from 'react';
import { type HeaderStore } from './HeaderStore.types';
import { HEADER_ATTR } from 'client/strapi/schemas/Header/Header.consts';
import { PAGE_ATTR } from 'client/strapi/schemas/Page/Page.consts';
import { type Header } from 'client/strapi/schemas/Header/Header.types';

const HeaderStoreContext = createContext<HeaderStore>({
	// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
	header: {} as Header,
	loading: false,
});

export const HeaderStoreProvider: FCC = ({ children }) => {
	const { data, loading } = useStrapi({
		entityType: 'header',
		attributes: {
			...HEADER_ATTR,
			main_pages: {
				...PAGE_ATTR,
				pages: PAGE_ATTR,
				parent_page: PAGE_ATTR,
			},
		},
	});

	return (
		<HeaderStoreContext.Provider
			value={{
				// Kuvli pouziti single types
				header: data as unknown as Header,
				loading,
			}}
		>
			{children}
		</HeaderStoreContext.Provider>
	);
};

export const useHeaderStore = (): HeaderStore => useContext(HeaderStoreContext);
