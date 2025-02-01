import { type FC } from 'react';
import { Header } from './Header/Header';
import { LayoutRoutes } from './LayoutRoutes/LayoutRoutes';
import { Footer } from './Footer/Footer';
import { Flex, Box } from '@chakra-ui/react';
import { HEADER_HEIGHT } from './Header/Header.consts';
import { HeaderStoreProvider } from 'client/stores/HeaderStore/HeaderStore';
import { FooterStoreProvider } from 'client/stores/FooterStore/FooterStore';

export const MainLayout: FC = () => {
	return (
		<Flex direction="column">
			<HeaderStoreProvider>
				<Header />
			</HeaderStoreProvider>
			<Box mt={HEADER_HEIGHT}>
				<LayoutRoutes />
			</Box>
			<FooterStoreProvider>
				<Footer />
			</FooterStoreProvider>
		</Flex>
	);
};
