import { createContext, useContext, useEffect, useState } from 'react';
import {
	type PageContext,
	type PageContextProviderProps,
} from './PageContext.types';

const PageStoreContext = createContext<PageContext>({
	page: {} as any,
});

export const PageContextProvider: FCC<PageContextProviderProps> = ({
	children,
	page: propsPage,
}) => {
	const [page, setPage] = useState(propsPage);

	useEffect(() => {
		setPage(propsPage);
	}, [propsPage]);

	return (
		<PageStoreContext.Provider
			value={{
				page,
			}}
		>
			{children}
		</PageStoreContext.Provider>
	);
};

export const usePage = (): PageContext => useContext(PageStoreContext);
