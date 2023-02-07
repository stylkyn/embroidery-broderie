import { type FC } from 'react';
import { Card, Image } from 'antd';
import { useProduct } from '../../contexts/ProductContext/ProductContext';
import { getImagePath } from '../../utils/filePath';

const { Meta } = Card;

export const Product: FC = () => {
	const { product } = useProduct();
	return (
		<Card
			hoverable
			style={{ width: 240 }}
			cover={<Image alt={product.name} src={getImagePath(product.image_main.url)} />}
		>
			<Meta title={product.name} description={product.description} />
		</Card>
	);
};
