import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Menu, type MenuProps, theme, Layout } from 'antd';
import { createElement, type FC } from 'react';

const { Sider } = Layout;

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
	const key = String(index + 1);

	return {
		key: `sub${key}`,
		icon: createElement(icon),
		label: `subnav ${key}`,

		children: new Array(4).fill(null).map((_, j) => {
			const subKey = index * 4 + j + 1;

			return {
				key: subKey,
				label: `option${subKey}`,
			};
		}),
	};
});

export const SideMenu: FC = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<Sider width={200} style={{ background: colorBgContainer }}>
			<Menu
				mode="inline"
				defaultSelectedKeys={['1']}
				defaultOpenKeys={['sub1']}
				style={{ height: '100%', borderRight: 0 }}
				items={items2}
			/>
		</Sider>
	);
};
