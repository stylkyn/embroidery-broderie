import { FC } from 'react';
import { Layout } from 'antd';
import { SideMenu } from './sideMenu/SideMenu';
import { Header } from './header/Header';
import { Content } from './content/Content';

export const MainLayout: FC = () => {
	return (
		<Layout>
			<Header />
			<Layout>
				<SideMenu />
				<Content />
			</Layout>
		</Layout>
	);
};
