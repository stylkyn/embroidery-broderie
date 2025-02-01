import { buildProductPath } from 'client/Layout/LayoutRoutes/LayoutRoutes.utils';
import { getImagePath } from 'client/utils/filePath';
import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProduct } from '../../../contexts';
import { Box, Image, Flex, useColorModeValue } from '@chakra-ui/react';
import { truncate } from 'lodash';
import { usePrice } from 'client/hooks';
import { ProductButton } from '../ProductButton/ProductButton';

export const ProductCard: FC = () => {
	const { product } = useProduct();
	const navigate = useNavigate();
	const boxColor = useColorModeValue('red.600', 'white');
	const { value, currencyChar } = usePrice(product.price);

	if (!product) {
		return null;
	}

	const onSelectProduct = (): void => {
		navigate(buildProductPath(product));
	};

	return (
		<Flex
			w="full"
			alignItems="center"
			justifyContent="center"
			onClick={onSelectProduct}
		>
			<Box maxW="sm" borderWidth="1px" rounded="lg" position="relative">
				<Image
					src={getImagePath(product.image_main.url)}
					alt={`Picture of ${product.name}`}
					roundedTop="lg"
				/>

				<Box p="4" pt="2">
					<Flex
						mt="1"
						justifyContent="space-between"
						alignContent="center"
					>
						<Box
							fontSize="1xl"
							fontWeight="semibold"
							as="h1"
							lineHeight="tight"
							isTruncated
						>
							{product.name}
						</Box>
					</Flex>
					<Flex>
						<Box
							fontSize="0.5xl"
							as="h2"
							lineHeight="tight"
							noOfLines={3}
						>
							{truncate(product.description, {
								length: 50,
								separator: /,? +/,
							})}
						</Box>
					</Flex>

					<Flex justifyContent="space-between" mt="5">
						<ProductButton />
						<Box fontSize="2xl" fontWeight="bold" color={boxColor}>
							<Box as="span" color={'red.600'} fontSize="lg">
								{currencyChar}
							</Box>
							{value}
						</Box>
					</Flex>
				</Box>
			</Box>
		</Flex>
	);
};
