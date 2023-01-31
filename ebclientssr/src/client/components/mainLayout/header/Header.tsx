import { Menu, type MenuProps, Layout } from 'antd';
import { type FC } from 'react';

const { Header: HeaderAntd } = Layout;

const items1: MenuProps['items'] = ['1', '2', '3'].map(key => ({
	key,
	label: `nav ${key}`,
}));

export const Header: FC = () => {
	return (
		<HeaderAntd className="header">
			<div className="logo" />
			<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
		</HeaderAntd>
	);
};
