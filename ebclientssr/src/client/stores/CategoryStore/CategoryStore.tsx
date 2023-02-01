import { createContext, useContext } from 'react';
import { useStrapi } from '../../strapi';
import { type CategoryStore } from './CategoryStore.types';

const CategoriesContext = createContext<CategoryStore>({
	categories: [],
	loading: false,
});

export const CategoriesContextProvider: FCC = ({ children }) => {
	const { data, loading } = useStrapi({ entityType: 'category' });

	return (
		<CategoriesContext.Provider
			value={{
				categories: data,
				loading,
			}}
		>
			{children}
		</CategoriesContext.Provider>
	);
};

export const useCategoriesContext = (): CategoryStore => useContext(CategoriesContext);
