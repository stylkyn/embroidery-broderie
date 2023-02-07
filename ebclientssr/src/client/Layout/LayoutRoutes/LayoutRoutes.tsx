import { CategoryPage } from '../../pages/CategoryPage';
import { type FC } from 'react';
import { Route, Routes } from 'react-router-dom';

export const LayoutRoutes: FC = () => {
	return (
		<Routes>
			<Route path="/category/:categoryUrl" element={<CategoryPage />} />
		</Routes>
	);
};
