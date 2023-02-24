import { Card, Anchor, Image } from 'antd';
import { buildCategoryPath } from 'client/Layout/LayoutRoutes/LayoutRoutes.utils';
import { getImagePath } from 'client/utils/filePath';
import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCategory } from '../../contexts';

const { Meta } = Card;

export const CategoryCard: FC = () => {
	const { category } = useCategory();
	const navigate = useNavigate();

	if (!category) {
		return null;
	}

	const onSelectCategory = (): void => {
		navigate(buildCategoryPath(category.url));
	};

	return (
		<Card.Grid
			onClick={onSelectCategory}
			style={{ width: '25%', padding: 10, textAlign: 'center', cursor: 'pointer' }}
		>
			<Meta title={category.name} style={{ fontSize: 12, marginBottom: 5 }} />
			<Image alt={category.name} src={getImagePath(category.image_main.url)} preview={false} />
		</Card.Grid>
	);
};
