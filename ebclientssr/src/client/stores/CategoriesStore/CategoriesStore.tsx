import { CATEGORY_ATTR, useStrapi } from '../../strapi';
import { createContext, useContext } from 'react';
import { type CategoriesStore } from './CategoriesStore.types';

const CategoriesStoreContext = createContext<CategoriesStore>({
	categories: [],
	loading: false,
});

export const CategoriesStoreProvider: FCC = ({ children }) => {
	const { data, loading } = useStrapi({
		entityType: 'category',
		attributes: {
			...CATEGORY_ATTR,
			categories: CATEGORY_ATTR,
			parent_category: CATEGORY_ATTR,
		},
		filters: {
			categories: {
				id: {
					notNull: true,
				},
			},
		},
	});

	return (
		<CategoriesStoreContext.Provider
			value={{
				categories: data,
				loading,
			}}
		>
			{children}
		</CategoriesStoreContext.Provider>
	);
};

export const useCategoriesStore = (): CategoriesStore => useContext(CategoriesStoreContext);
