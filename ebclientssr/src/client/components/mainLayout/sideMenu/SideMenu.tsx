import { Menu, theme, Layout } from 'antd';
import { type FC } from 'react';
import { useCategoriesContext } from '../../../stores';
import { categoriesToMenuItems } from './SideMenu.utils';

const { Sider } = Layout;

export const SideMenu: FC = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	const { categories } = useCategoriesContext();
	const menuItems = categoriesToMenuItems(categories);

	console.log(categories);

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
