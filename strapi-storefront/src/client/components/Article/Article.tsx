import { useArticle } from 'client/contexts/ArticleContext/ArticleContext';
import { getImagePath } from 'client/utils/filePath';
import { type FC } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Text, Code } from '@chakra-ui/react';

export const Article: FC = () => {
	const { article } = useArticle();
	if (!article) {
		return null;
	}

	return (
		<ReactMarkdown
			transformImageUri={(url) => getImagePath(url)}
			rehypePlugins={[rehypeRaw]}
			components={{
				h1: ({ node, ...props }) => <Text fontSize="6xl" {...props} />,
				h2: ({ node, ...props }) => <Text fontSize="5xl" {...props} />,
				h3: ({ node, ...props }) => <Text fontSize="4xl" {...props} />,
				h4: ({ node, ...props }) => <Text fontSize="3xl" {...props} />,
				h5: ({ node, ...props }) => <Text fontSize="2xl" {...props} />,
				h6: ({ node, ...props }) => <Text fontSize="xl" {...props} />,
				code: ({ node, ...props }) => <Code {...props} />,
			}}
		>
			{article.content}
		</ReactMarkdown>
	);
};
