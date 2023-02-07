import { type FC } from 'react';
import { Breadcrumb } from 'antd';
import { useCategory } from '../../contexts';

export const BreadcrumbLink: FC = () => {
	const { category } = useCategory();
	console.log(category);
	return (
		<Breadcrumb separator=">">
			<Breadcrumb.Item href="/">Home</Breadcrumb.Item>
			<Breadcrumb.Item>An Application</Breadcrumb.Item>
		</Breadcrumb>
	);
};
