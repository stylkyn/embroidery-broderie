import { Menu, theme, Layout } from 'antd';
import { type FC } from 'react';
import { useCategoriesStore } from '../../stores';
import { categoriesToMenuItems } from './SideMenu.utils';

const { Sider } = Layout;

export const SideMenu: FC = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	const { categories } = useCategoriesStore();
	const menuItems = categoriesToMenuItems(categories);

	return (
		<Sider width={200} style={{ background: colorBgContainer }}>
			<Menu
				mode="inline"
				defaultSelectedKeys={['1']}
				defaultOpenKeys={['sub1']}
				style={{ height: '100%', borderRight: 0 }}
				items={menuItems}
			/>
		</Sider>
	);
};
