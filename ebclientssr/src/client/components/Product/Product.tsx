import { type FC } from 'react';
import { useProduct } from '../../contexts/ProductContext/ProductContext';
import { getImagePath } from '../../utils/filePath';
import { truncate } from 'lodash';

import { Flex, Box, Image, useColorModeValue, Button } from '@chakra-ui/react';
import { MdShoppingBasket } from 'react-icons/md';

export const Product: FC = () => {
	const { product } = useProduct();
	return (
		<Flex w="full" alignItems="center" justifyContent="center">
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
								length: 150,
								separator: /,? +/,
							})}
						</Box>
					</Flex>

					<Flex justifyContent="space-between" mt="5">
						<Button
							leftIcon={<MdShoppingBasket />}
							colorScheme="pink"
							variant="outline"
							w="half"
						>
							Add to Card
						</Button>
						<Box
							fontSize="2xl"
							fontWeight="bold"
							color={useColorModeValue('red.600', 'white')}
						>
							<Box as="span" color={'red.600'} fontSize="lg">
								£
							</Box>
							20
						</Box>
					</Flex>
				</Box>
			</Box>
		</Flex>
	);
};
