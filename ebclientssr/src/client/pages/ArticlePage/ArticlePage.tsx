import { useParams } from 'react-router-dom';
import { type FC } from 'react';
import { Article } from 'client/components';
import {
	ArticlesStoreProvider,
	useArticleStore,
} from 'client/stores/ArticleStore/ArticleStore';
import { ArticleContextProvider } from 'client/contexts/ArticleContext/ArticleContext';

const ArticleContextContainer: FCC = ({ children }) => {
	const { articles } = useArticleStore();

	return (
		<ArticleContextProvider article={articles[0]}>
			{children}
		</ArticleContextProvider>
	);
};

export const ArticlePage: FC = () => {
	const { articleUrl } = useParams();

	return (
		<ArticlesStoreProvider
			filters={{
				url: {
					eq: articleUrl,
				},
			}}
		>
			<ArticleContextContainer>
				<Article />
			</ArticleContextContainer>
		</ArticlesStoreProvider>
	);
};
