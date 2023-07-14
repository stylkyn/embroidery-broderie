import { createContext, useContext, useState } from 'react';
import {
	type ProductContext,
	type ProductContextProviderProps,
} from './ProductContext.types';

const ProductStoreContext = createContext<ProductContext>({
	product: {} as any,
});

export const ProductContextProvider: FCC<ProductContextProviderProps> = ({
	children,
	product: initialProduct,
}) => {
	const [product] = useState(initialProduct);

	return (
		<ProductStoreContext.Provider
			value={{
				product,
			}}
		>
			{children}
		</ProductStoreContext.Provider>
	);
};

export const useProduct = (): ProductContext => useContext(ProductStoreContext);
