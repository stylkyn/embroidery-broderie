import { useParams } from 'react-router-dom';
import { type FC } from 'react';
import { Article } from 'client/components';
import { Container } from '@chakra-ui/react';
import {
	useWidgetPageStore,
	WidgetPageStoreProvider,
} from 'client/stores/WidgetPageStore/WidgetPageStore';
import { PageContextProvider } from 'client/contexts/PageContext/PageContext';

const ArticleContextContainer: FCC = ({ children }) => {
	const { widgetPage } = useWidgetPageStore();

	return (
		<PageContextProvider page={widgetPage}>{children}</PageContextProvider>
	);
};

export const WidgetPage: FC = () => {
	const { pageUrl } = useParams();

	return (
		<WidgetPageStoreProvider
			filters={{
				url: {
					eq: pageUrl,
				},
			}}
		>
			<ArticleContextContainer>
				<Container maxW="container.lg">
					<Article />
				</Container>
			</ArticleContextContainer>
		</WidgetPageStoreProvider>
	);
};
