import { CategoryProductsStoreProvider, useCategoriesStore, useCategoryProductsStore } from '../../stores';
import { type FC } from 'react';
import { BreadcrumbLink, ProductList } from '../../components';
import { useParams } from 'react-router-dom';
import { CategoryContextProvider } from '../../contexts';
import { Layout } from 'antd';
import { SideMenu } from '../../Layout/SideMenu/SideMenu';
import { findActiveCategory } from './CategoryPage.utils';
import { SubCategoryList } from 'client/components/SubCategoryList/SubCategoryList';

const { Content } = Layout;

export const CategoryPage: FC = () => {
	const { categoryUrl } = useParams();
	const { categories } = useCategoriesStore();
	const category = findActiveCategory(categories, categoryUrl);

	return (
		<CategoryContextProvider category={category}>
			<CategoryProductsStoreProvider categoryUrl={categoryUrl}>
				<Layout>
					<SideMenu />
					<Layout style={{ padding: '0 24px 24px' }}>
						<div style={{ margin: '16px 0' }}>
							<BreadcrumbLink />
						</div>
						<Content>
							<SubCategoryList />
							<ProductList getProductsFn={useCategoryProductsStore} />
						</Content>
					</Layout>
				</Layout>
			</CategoryProductsStoreProvider>
		</CategoryContextProvider>
	);
};
