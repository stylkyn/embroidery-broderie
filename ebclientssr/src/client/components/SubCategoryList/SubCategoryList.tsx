import { Flex } from '@chakra-ui/react';
import { type FC } from 'react';
import { CategoryContextProvider, useCategory } from '../../contexts';
import { CategoryCard } from '../CategoryCard/CategoryCard';

export const SubCategoryList: FC = () => {
	const { category } = useCategory();

	if (!category?.categories?.length) {
		return null;
	}

	return (
		<Flex justifyContent="center" gap={5} m="5">
			{category?.categories.map((c) => (
				<CategoryContextProvider key={c.id} category={c}>
					<CategoryCard />
				</CategoryContextProvider>
			))}
		</Flex>
	);
};
