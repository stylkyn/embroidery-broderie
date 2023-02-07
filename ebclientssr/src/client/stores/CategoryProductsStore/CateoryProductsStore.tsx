import { createContext, useContext } from 'react';
import { CATEGORY_ATTR, useStrapi, PRODUCT_ATTR } from '../../strapi';
import { type CategoryProductsStoreProviderProps, type CategoryProductsStore } from './CateoryProductsStore.types';

const CategoryProductsContext = createContext<CategoryProductsStore>({
	products: [],
	loading: false,
});

export const CategoryProductsStoreProvider: FCC<CategoryProductsStoreProviderProps> = ({ children, categoryUrl }) => {
	const { data, loading } = useStrapi({
		entityType: 'product',
		attributes: {
			...PRODUCT_ATTR,
			categories: CATEGORY_ATTR,
		},
		filters: {
			categories: {
				url: {
					eq: categoryUrl,
				},
			},
		},
	});

	return (
		<CategoryProductsContext.Provider
			value={{
				products: data,
				loading,
			}}
		>
			{children}
		</CategoryProductsContext.Provider>
	);
};

export const useCategoryProductsStore = (): CategoryProductsStore => useContext(CategoryProductsContext);
