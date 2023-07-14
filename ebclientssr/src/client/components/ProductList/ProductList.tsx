import { type FC } from 'react';
import { type ProductListProps } from './ProductList.types';
import { ProductContextProvider } from '../../contexts';
import { Product } from '../Product/Product';
import { Wrap, WrapItem } from '@chakra-ui/react';

export const ProductList: FC<ProductListProps> = ({ getProductsFn }) => {
	const { products } = getProductsFn();

	return (
		<Wrap>
			{products.map((product) => (
				<WrapItem key={product.id} maxWidth="25rem">
					<ProductContextProvider product={product}>
						<Product />
					</ProductContextProvider>
				</WrapItem>
			))}
		</Wrap>
	);
};
