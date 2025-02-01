import { Box, Heading, Container, Text, Button, Stack } from '@chakra-ui/react';
import { type FC } from 'react';

export const HomePage: FC = () => {
	return (
		<>
			<Container maxW={'3xl'}>
				<Stack
					as={Box}
					textAlign={'center'}
					spacing={{ base: 8, md: 14 }}
					py={{ base: 20, md: 36 }}
				>
					<Heading
						fontWeight={600}
						fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
						lineHeight={'110%'}
					>
						Download your free
						<br />
						<Text as={'span'} color={'pink.400'}>
							embroidery
						</Text>
					</Heading>
					<Text color={'gray.500'}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Nunc sagittis arcu vel varius fermentum. Integer et
						volutpat risus. Duis sit amet ex eu nulla mattis laoreet
						laoreet sed leo. Nunc egestas justo vel placerat dictum.
						In hac habitasse platea dictumst. Nam id tristique
						sapien. Sed mattis sapien molestie efficitur aliquam.
						Class aptent taciti sociosqu ad litora torquent per
						conubia nostra, per inceptos himenaeos. Vivamus tempor
						nunc nisl. Nam vehicula convallis consectetur.
						Pellentesque a posuere enim. Suspendisse elementum
						varius elit, eget finibus libero interdum vitae. Proin
						sem orci, accumsan ut convallis nec, varius egestas
						libero.
					</Text>
					<Stack
						direction={'column'}
						spacing={3}
						align={'center'}
						alignSelf={'center'}
						position={'relative'}
					>
						<Button colorScheme={'pink'} rounded={'full'} px={6}>
							Get Started
						</Button>
						<Button
							variant={'link'}
							colorScheme={'pink'}
							size={'sm'}
						>
							Learn more
						</Button>
					</Stack>
				</Stack>
			</Container>
		</>
	);
};
