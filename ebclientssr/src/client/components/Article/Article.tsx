import { useArticle } from 'client/contexts/ArticleContext/ArticleContext';
import { type FC } from 'react';

export const Article: FC = () => {
	const { article } = useArticle();

	return <>{article?.content}</>;
};
