import { createContext, useContext, useState } from 'react';
import { type ProductContext, type ProductContextProviderProps } from './ProductContext.types';

const CategoriesStoreContext = createContext<ProductContext>({
	product: {} as any,
});

export const ProductContextProvider: FCC<ProductContextProviderProps> = ({ children, product: initialProduct }) => {
	const [product] = useState(initialProduct);

	return (
		<CategoriesStoreContext.Provider
			value={{
				product,
			}}
		>
			{children}
		</CategoriesStoreContext.Provider>
	);
};

export const useProduct = (): ProductContext => useContext(CategoriesStoreContext);
