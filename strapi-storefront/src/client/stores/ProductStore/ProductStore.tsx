import { CATEGORY_ATTR, PRODUCT_ATTR, useStrapi } from '../../strapi';
import { createContext, useContext } from 'react';
import { type ProductStore } from './ProductStore.types';
import { type Filters } from 'client/strapi/queryBuilder/filters/filters.types';

const ProductStoreContext = createContext<ProductStore>({
	products: [],
	loading: false,
});

export const ProductStoreProvider: FCC<{ filters: Filters<'product'> }> = ({
	children,
	filters,
}) => {
	const { data, loading } = useStrapi({
		entityType: 'product',
		attributes: {
			...PRODUCT_ATTR,
			mainCategory: CATEGORY_ATTR,
		},
		filters,
	});

	return (
		<ProductStoreContext.Provider
			value={{
				products: data,
				loading,
			}}
		>
			{children}
		</ProductStoreContext.Provider>
	);
};

export const useProductStore = (): ProductStore =>
	useContext(ProductStoreContext);
