import { type FC } from 'react';
import { Card } from 'antd';
import { type ProductListProps } from './ProductList.types';
import { ProductContextProvider } from '../../contexts';
import { Product } from '../Product/Product';

export const ProductList: FC<ProductListProps> = ({ getProductsFn }) => {
	const { products } = getProductsFn();
	return (
		<Card>
			{products.map(product => (
				<ProductContextProvider key={product.id} product={product}>
					<Product />
				</ProductContextProvider>
			))}
		</Card>
	);
};
