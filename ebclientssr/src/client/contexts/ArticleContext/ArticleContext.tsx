import { createContext, useContext, useEffect, useState } from 'react';
import {
	type ArticleContext,
	type ArticleContextProviderProps,
} from './ArticleContext.types';

const ArticleStoreContext = createContext<ArticleContext>({
	article: {} as any,
});

export const ArticleContextProvider: FCC<ArticleContextProviderProps> = ({
	children,
	article: propsArticle,
}) => {
	const [article, setArticle] = useState(propsArticle);

	useEffect(() => {
		setArticle(propsArticle);
	}, [propsArticle]);

	return (
		<ArticleStoreContext.Provider
			value={{
				article,
			}}
		>
			{children}
		</ArticleStoreContext.Provider>
	);
};

export const useArticle = (): ArticleContext => useContext(ArticleStoreContext);
