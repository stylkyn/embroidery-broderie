import { type FC } from 'react';
import { useProduct } from '../../contexts/ProductContext/ProductContext';
import { getImagePath } from '../../utils/filePath';
import { truncate } from 'lodash';

import { Flex, Box, Image, useColorModeValue } from '@chakra-ui/react';
import { AddCardButton } from '../shared/AddCardButton/AddCardButton';
import { usePrice } from 'client/hooks';

export const Product: FC = () => {
	const { product } = useProduct();
	const { value, currencyChar } = usePrice(product.price);
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
						<AddCardButton />
						<Box
							fontSize="2xl"
							fontWeight="bold"
							color={useColorModeValue('red.600', 'white')}
						>
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
