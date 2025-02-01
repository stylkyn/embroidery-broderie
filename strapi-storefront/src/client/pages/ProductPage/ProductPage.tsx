import { Container, Flex } from '@chakra-ui/react';
import { BreadcrumbLink, ProductDetail } from 'client/components';
import {
	CategoryContextProvider,
	ProductContextProvider,
} from 'client/contexts';
import { SideMenu } from 'client/Layout/SideMenu/SideMenu';
import {
	CategoriesStoreProvider,
	ProductStoreProvider,
	useCategoriesStore,
	useProductStore,
} from 'client/stores';
import { findActiveCategory } from 'client/utils/findActiveCategory';
import { type FC } from 'react';
import { useParams } from 'react-router-dom';

const ProductContextContainer: FCC = ({ children }) => {
	const { products, loading } = useProductStore();
	const { categories } = useCategoriesStore();
	const { categoryUrl } = useParams();
	const category = findActiveCategory(categories, categoryUrl);

	if (loading) {
		return null;
	}

	return (
		<CategoryContextProvider category={category}>
			<ProductContextProvider product={products[0]}>
				{children}
			</ProductContextProvider>
		</CategoryContextProvider>
	);
};

export const ProductPage: FC = () => {
	const { productUrl } = useParams();

	return (
		<CategoriesStoreProvider>
			<ProductStoreProvider
				filters={{
					url: {
						eq: productUrl,
					},
				}}
			>
				<ProductContextContainer>
					<Flex>
						<SideMenu />
						<Container maxW="90%">
							<div style={{ margin: '16px 0' }}>
								<BreadcrumbLink />
							</div>
							<ProductDetail />
						</Container>
					</Flex>
				</ProductContextContainer>
			</ProductStoreProvider>
		</CategoriesStoreProvider>
	);
};
