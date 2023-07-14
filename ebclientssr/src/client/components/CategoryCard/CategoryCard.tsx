import { buildCategoryPath } from 'client/Layout/LayoutRoutes/LayoutRoutes.utils';
import { getImagePath } from 'client/utils/filePath';
import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCategory } from '../../contexts';
import { Box, Image, Flex, Text } from '@chakra-ui/react';

export const CategoryCard: FC = () => {
	const { category } = useCategory();
	const navigate = useNavigate();

	if (!category) {
		return null;
	}

	const onSelectCategory = (): void => {
		navigate(buildCategoryPath(category.url));
	};

	return (
		<Flex
			position="relative"
			rounded="md"
			_hover={{ cursor: 'pointer' }}
			onClick={onSelectCategory}
		>
			<Flex>
				<Image
					src={getImagePath(category.image_main.url)}
					objectFit="cover"
				/>
				<Box
					background="black"
					w="full"
					inset={0}
					h="full"
					position="absolute"
					bg="linear-gradient(rgba(0, 0, 0, 0) 32%, rgb(0, 0, 0) 100%)"
					opacity="0.7"
				></Box>
			</Flex>
			<Text
				position="absolute"
				bottom="3"
				color="white"
				width="100%"
				textAlign="center"
				fontSize="18px"
				autoCapitalize="uppercase"
				fontWeight="semibold"
			>
				{category.name}
			</Text>
		</Flex>
	);
};
