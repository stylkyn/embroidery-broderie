import { type FC } from 'react';
import { useCategory } from '../../../contexts';
import { getParentCategories } from './BreadcrumbLink.utils';
import {
	buildCategoryPath,
	buildHomePath,
} from 'client/Layout/LayoutRoutes/LayoutRoutes.utils';
import { ChevronRightIcon } from '@chakra-ui/icons';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink as CKBreadcrumbLink,
} from '@chakra-ui/react';

export const BreadcrumbLink: FC = () => {
	const { category } = useCategory();

	const parentCategories = getParentCategories(category);
	return (
		<Breadcrumb
			spacing="8px"
			separator={<ChevronRightIcon color="gray.500" />}
		>
			<BreadcrumbItem>
				<CKBreadcrumbLink href={buildHomePath()}>Home</CKBreadcrumbLink>
			</BreadcrumbItem>
			{parentCategories.map((c) => (
				<BreadcrumbItem key={c.id}>
					<CKBreadcrumbLink href={buildCategoryPath(c.url)}>
						{c.name}
					</CKBreadcrumbLink>
				</BreadcrumbItem>
			))}
			{category && (
				<BreadcrumbItem>
					<CKBreadcrumbLink href={buildCategoryPath(category.url)}>
						{category.name}
					</CKBreadcrumbLink>
				</BreadcrumbItem>
			)}
		</Breadcrumb>
	);
};
