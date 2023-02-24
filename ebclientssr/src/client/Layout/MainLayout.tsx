import { type FC } from 'react';
import { Layout, ConfigProvider } from 'antd';
import { Header } from './Header/Header';
import { LayoutRoutes } from './LayoutRoutes/LayoutRoutes';

export const MainLayout: FC = () => {
	return (
		<ConfigProvider>
			<Layout>
				<Header />
				<LayoutRoutes />
			</Layout>
		</ConfigProvider>
	);
};
