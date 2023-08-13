import { useParams } from 'react-router-dom';
import { type FC } from 'react';
import { Article } from 'client/components';
import { ArticleContextProvider } from 'client/contexts/ArticleContext/ArticleContext';
import { Container } from '@chakra-ui/react';
import {
	PagesStoreProvider,
	usePagesStore,
} from 'client/stores/PagesStore/PagesStore';

const ArticleContextContainer: FCC = ({ children }) => {
	const { pages } = usePagesStore();

	return (
		<ArticleContextProvider article={pages[0]?.article}>
			{children}
		</ArticleContextProvider>
	);
};

export const ArticlePage: FC = () => {
	const { articleUrl } = useParams();

	return (
		<PagesStoreProvider
			filters={{
				url: {
					eq: articleUrl,
				},
			}}
		>
			<ArticleContextContainer>
				<Container maxW="container.lg">
					<Article />
				</Container>
			</ArticleContextContainer>
		</PagesStoreProvider>
	);
};
