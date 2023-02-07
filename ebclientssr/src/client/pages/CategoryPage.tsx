import { CategoryProductsStoreProvider, useCategoriesStore, useCategoryProductsStore } from '../stores';
import { type FC } from 'react';
import { BreadcrumbLink, ProductList } from '../components';
import { useParams } from 'react-router-dom';
import { CategoryContextProvider } from '../contexts';

export const CategoryPage: FC = () => {
	const { categoryUrl } = useParams();
	const { categories } = useCategoriesStore();
	const category = categories.find(c => c.url === categoryUrl);

	return (
		<CategoryProductsStoreProvider categoryUrl={categoryUrl}>
			<CategoryContextProvider category={category}>
				<BreadcrumbLink />
			</CategoryContextProvider>
			<ProductList getProductsFn={useCategoryProductsStore} />
		</CategoryProductsStoreProvider>
	);
};
