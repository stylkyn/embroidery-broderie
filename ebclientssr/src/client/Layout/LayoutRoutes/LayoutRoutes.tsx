import { CategoryPage } from '../../pages/CategoryPage/CategoryPage';
import { type FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'client/pages/Homepage/HomePage';

export const LayoutRoutes: FC = () => {
	return (
		<Routes>
			<Route path="/category/:categoryUrl" element={<CategoryPage />} />
			<Route path="/" element={<HomePage />} />
		</Routes>
	);
};
