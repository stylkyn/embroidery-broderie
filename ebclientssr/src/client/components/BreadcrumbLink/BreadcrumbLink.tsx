import { type FC } from 'react';
import { Breadcrumb } from 'antd';
import { useCategory } from '../../contexts';
import { getParentCategories } from './BreadcrumbLink.utils';
import { buildCategoryPath, buildHomePath } from 'client/Layout/LayoutRoutes/LayoutRoutes.utils';
import { HomeOutlined } from '@ant-design/icons';

export const BreadcrumbLink: FC = () => {
	const { category } = useCategory();

	const parentCategories = getParentCategories(category);
	console.log(parentCategories);
	return (
		<Breadcrumb>
			<Breadcrumb.Item href={buildHomePath()}>
				<HomeOutlined />
				<span>Home</span>
			</Breadcrumb.Item>
			{parentCategories.map(c => (
				<Breadcrumb.Item key={c.id} href={buildCategoryPath(c.url)}>
					<span>{c.name}</span>
				</Breadcrumb.Item>
			))}
			{category && <Breadcrumb.Item>{category?.name}</Breadcrumb.Item>}
		</Breadcrumb>
	);
};
