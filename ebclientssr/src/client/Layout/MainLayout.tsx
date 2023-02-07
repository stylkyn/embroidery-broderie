import { type FC } from 'react';
import { Layout } from 'antd';
import { SideMenu } from './SideMenu/SideMenu';
import { Header } from './Header/Header';
import { LayoutRoutes } from './LayoutRoutes/LayoutRoutes';

export const MainLayout: FC = () => {
	return (
		<Layout>
			<Header />
			<Layout>
				<SideMenu />
				<LayoutRoutes />
			</Layout>
		</Layout>
	);
};
