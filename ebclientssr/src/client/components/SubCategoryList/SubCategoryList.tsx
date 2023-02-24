import { type FC } from 'react';
import { Card } from 'antd';
import { CategoryContextProvider, useCategory } from '../../contexts';
import { CategoryCard } from '../CategoryCard/CategoryCard';

export const SubCategoryList: FC = () => {
	const { category } = useCategory();

	if (!category?.categories?.length) {
		return null;
	}
	return (
		<Card title={category.name} bodyStyle={{ padding: '0' }}>
			<div style={{ display: 'flex' }}>
				{category?.categories.map(c => (
					<CategoryContextProvider key={c.id} category={c}>
						<CategoryCard />
					</CategoryContextProvider>
				))}
			</div>
		</Card>
	);
};
