import { CategoryPage } from '../../pages/CategoryPage/CategoryPage';
import { type FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'client/pages/Homepage/HomePage';
import { ArticlePage } from 'client/pages/ArticlePage/ArticlePage';
import { WidgetPage } from 'client/pages/WidgetPage/WidgetPage';

export const LayoutRoutes: FC = () => {
	return (
		<Routes>
			<Route path="/page/:pageUrl" element={<WidgetPage />} />
			<Route path="/article/:articleUrl" element={<ArticlePage />} />
			<Route path="/category/:categoryUrl" element={<CategoryPage />} />
			<Route path="/" element={<HomePage />} />
		</Routes>
	);
};
