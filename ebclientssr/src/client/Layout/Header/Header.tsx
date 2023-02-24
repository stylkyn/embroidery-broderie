import { Menu, type MenuProps, Layout, Row, Col, theme } from 'antd';
import { Search } from 'client/components';
import { type FC } from 'react';

const { Header: HeaderAntd } = Layout;

const items1: MenuProps['items'] = ['1', '2', '3'].map(key => ({
	key,
	label: `nav ${key}`,
}));

export const Header: FC = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<HeaderAntd style={{ background: 'white', position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
			<Row>
				<Col>
					<Menu
						theme="light"
						mode="horizontal"
						defaultSelectedKeys={['2']}
						items={items1}
						style={{ background: colorBgContainer }}
					/>
				</Col>
				<Col>
					<Search />
				</Col>
			</Row>
		</HeaderAntd>
	);
};
