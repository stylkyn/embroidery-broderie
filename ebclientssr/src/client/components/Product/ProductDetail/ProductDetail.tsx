import {
	Box,
	Container,
	Stack,
	Text,
	Image,
	Flex,
	Button,
	Heading,
	SimpleGrid,
	StackDivider,
	useColorModeValue,
} from '@chakra-ui/react';
import { useProduct } from 'client/contexts';
import { getImagePath } from 'client/utils/filePath';
import { type FC } from 'react';
import { MdLocalShipping } from 'react-icons/md';
import { usePrice } from 'client/hooks';

export const ProductDetail: FC = () => {
	const { product } = useProduct();
	const { value, currencyChar } = usePrice(product.price);
	const boxColor = useColorModeValue('red.600', 'white');

	return (
		<Container maxW={'7xl'}>
			<SimpleGrid
				columns={{ base: 1, lg: 2 }}
				spacing={{ base: 8, md: 10 }}
				py={{ base: 18, md: 24 }}
			>
				<Flex>
					<Image
						rounded={'md'}
						alt={product.name}
						src={getImagePath(product.image_main.url)}
						fit={'cover'}
						align={'center'}
						w={'100%'}
						h={{ base: '100%', sm: '400px', lg: '500px' }}
					/>
				</Flex>
				<Stack spacing={{ base: 2, md: 4 }}>
					<Box as={'header'}>
						<Heading
							lineHeight={1.1}
							fontWeight={600}
							fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
						>
							{product.name}
						</Heading>
						<Box fontSize="2xl" fontWeight="bold" color={boxColor}>
							<Box as="span" color={'red.600'} fontSize="lg">
								{currencyChar}
							</Box>
							{value}
						</Box>
					</Box>

					<Stack
						spacing={{ base: 4, sm: 6 }}
						direction={'column'}
						divider={
							<StackDivider
								borderColor={useColorModeValue(
									'gray.200',
									'gray.600'
								)}
							/>
						}
					>
						<Text fontSize={'md'}>{product.description}</Text>
						{/* <Box>
							<Text
								fontSize={{ base: '16px', lg: '18px' }}
								color={useColorModeValue(
									'yellow.500',
									'yellow.300'
								)}
								fontWeight={'500'}
								textTransform={'uppercase'}
								mb={'4'}
							>
								Features
							</Text>

							<SimpleGrid
								columns={{ base: 1, md: 2 }}
								spacing={10}
							>
								<List spacing={2}>
									<ListItem>Chronograph</ListItem>
									<ListItem>
										Master Chronometer Certified
									</ListItem>{' '}
									<ListItem>Tachymeter</ListItem>
								</List>
								<List spacing={2}>
									<ListItem>Anti‑magnetic</ListItem>
									<ListItem>Chronometer</ListItem>
									<ListItem>Small seconds</ListItem>
								</List>
							</SimpleGrid>
						</Box>
						<Box>
							<Text
								fontSize={{ base: '16px', lg: '18px' }}
								color={useColorModeValue(
									'yellow.500',
									'yellow.300'
								)}
								fontWeight={'500'}
								textTransform={'uppercase'}
								mb={'4'}
							>
								Product Details
							</Text>

							<List spacing={2}>
								<ListItem>
									<Text as={'span'} fontWeight={'bold'}>
										Between lugs:
									</Text>{' '}
									20 mm
								</ListItem>
								<ListItem>
									<Text as={'span'} fontWeight={'bold'}>
										Bracelet:
									</Text>{' '}
									leather strap
								</ListItem>
								<ListItem>
									<Text as={'span'} fontWeight={'bold'}>
										Case:
									</Text>{' '}
									Steel
								</ListItem>
								<ListItem>
									<Text as={'span'} fontWeight={'bold'}>
										Case diameter:
									</Text>{' '}
									42 mm
								</ListItem>
								<ListItem>
									<Text as={'span'} fontWeight={'bold'}>
										Dial color:
									</Text>{' '}
									Black
								</ListItem>
								<ListItem>
									<Text as={'span'} fontWeight={'bold'}>
										Crystal:
									</Text>{' '}
									Domed, scratch‑resistant sapphire crystal
									with anti‑reflective treatment inside
								</ListItem>
								<ListItem>
									<Text as={'span'} fontWeight={'bold'}>
										Water resistance:
									</Text>{' '}
									5 bar (50 metres / 167 feet){' '}
								</ListItem>
							</List>
						</Box> */}
					</Stack>

					<Button
						rounded={'none'}
						w={'full'}
						mt={8}
						size={'lg'}
						py={'7'}
						bg={useColorModeValue('gray.900', 'gray.50')}
						color={useColorModeValue('white', 'gray.900')}
						textTransform={'uppercase'}
						_hover={{
							transform: 'translateY(2px)',
							boxShadow: 'lg',
						}}
					>
						Add to cart
					</Button>

					<Stack
						direction="row"
						alignItems="center"
						justifyContent={'center'}
					>
						<MdLocalShipping />
						<Text>2-3 business days delivery</Text>
					</Stack>
				</Stack>
			</SimpleGrid>
		</Container>
	);
};
