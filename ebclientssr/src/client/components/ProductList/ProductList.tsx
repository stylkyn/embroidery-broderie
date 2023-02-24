import { type FC } from 'react';
import { List } from 'antd';
import { type ProductListProps } from './ProductList.types';
import { ProductContextProvider } from '../../contexts';
import { Product } from '../Product/Product';

export const ProductList: FC<ProductListProps> = ({ getProductsFn }) => {
	const { products } = getProductsFn();

	return (
		<List
			header={<span>Products</span>}
			grid={{ column: 5 }}
			dataSource={products}
			renderItem={product => (
				<List.Item>
					<ProductContextProvider key={product.id} product={product}>
						<Product />
					</ProductContextProvider>
				</List.Item>
			)}
		/>
	);
};
