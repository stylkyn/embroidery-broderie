import { type FC } from 'react';
import { Header } from './Header/Header';
import { LayoutRoutes } from './LayoutRoutes/LayoutRoutes';
import { Footer } from './Footer/Footer';
import { Flex } from '@chakra-ui/react';

export const MainLayout: FC = () => {
	return (
		<Flex direction="column">
			<Header />
			<LayoutRoutes />
			<Footer />
		</Flex>
	);
};
