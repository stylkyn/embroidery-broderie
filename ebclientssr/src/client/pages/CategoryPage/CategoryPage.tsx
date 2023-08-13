import {
	CategoriesStoreProvider,
	CategoryProductsStoreProvider,
	useCategoriesStore,
	useCategoryProductsStore,
} from '../../stores';
import { type FC } from 'react';
import { BreadcrumbLink, ProductList } from '../../components';
import { useParams } from 'react-router-dom';
import { CategoryContextProvider } from '../../contexts';
import { SubCategoryList } from 'client/components/SubCategoryList/SubCategoryList';
import { Container, Flex } from '@chakra-ui/react';
import { SideMenu } from 'client/Layout/SideMenu/SideMenu';
import { findActiveCategory } from 'client/utils/findActiveCategory';

const CategoryContextContainer: FCC = ({ children }) => {
	const { categories } = useCategoriesStore();
	const { categoryUrl } = useParams();
	const category = findActiveCategory(categories, categoryUrl);

	return (
		<CategoryContextProvider category={category}>
			{children}
		</CategoryContextProvider>
	);
};

export const CategoryPage: FC = () => {
	const { categoryUrl } = useParams();

	return (
		<CategoriesStoreProvider>
			<CategoryContextContainer>
				<CategoryProductsStoreProvider categoryUrl={categoryUrl}>
					<Flex>
						<SideMenu />
						<Container maxW="90%">
							<div style={{ margin: '16px 0' }}>
								<BreadcrumbLink />
							</div>
							<SubCategoryList />
							<ProductList
								getProductsFn={useCategoryProductsStore}
							/>
						</Container>
					</Flex>
				</CategoryProductsStoreProvider>
			</CategoryContextContainer>
		</CategoriesStoreProvider>
	);
};
