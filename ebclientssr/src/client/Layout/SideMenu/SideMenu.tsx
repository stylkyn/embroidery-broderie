import { Menu, theme, Layout } from 'antd';
import { useCategory } from 'client/contexts';
import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCategoriesStore } from '../../stores';
import { buildCategoryPath } from '../LayoutRoutes/LayoutRoutes.utils';
import { categoriesToMenuItems } from './SideMenu.utils';

const { Sider } = Layout;

export const SideMenu: FC = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	const { categories } = useCategoriesStore();
	const { category } = useCategory();
	const navigate = useNavigate();

	const menuItems = categoriesToMenuItems(categories);
	const selectedKeys = category ? [category.url] : [];

	const onSelectCategory = (e: any): void => {
		navigate(buildCategoryPath(e.key));
	};

	return (
		<Sider width={200} style={{ background: colorBgContainer }}>
			<Menu
				mode="vertical"
				selectedKeys={selectedKeys}
				onClick={onSelectCategory}
				defaultOpenKeys={selectedKeys}
				style={{ height: '100%', borderRight: 0 }}
				items={menuItems}
			/>
		</Sider>
	);
};
