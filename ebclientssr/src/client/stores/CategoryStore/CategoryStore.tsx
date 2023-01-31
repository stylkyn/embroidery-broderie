import { createContext, useContext } from 'react';
import { useStrapi } from '../../strapi';
import { type CategoryStore, type Category } from './CategoryStore.types';

const CategoriesContext = createContext<CategoryStore>({});

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

export const useCategoriesContext = (): Category[] => useContext(CategoriesContext);
