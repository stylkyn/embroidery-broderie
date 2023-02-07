import { createContext, useContext, useState } from 'react';
import { type CategoryContext, type CategoryContextProviderProps } from './CategoryContext.types';

const CategoriesStoreContext = createContext<CategoryContext>({
	category: {} as any,
});

export const CategoryContextProvider: FCC<CategoryContextProviderProps> = ({ children, category: initialCategory }) => {
	const [category] = useState(initialCategory);

	return (
		<CategoriesStoreContext.Provider
			value={{
				category,
			}}
		>
			{children}
		</CategoriesStoreContext.Provider>
	);
};

export const useCategory = (): CategoryContext => useContext(CategoriesStoreContext);
