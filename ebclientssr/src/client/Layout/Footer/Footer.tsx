import {
	Box,
	Container,
	SimpleGrid,
	Stack,
	Input,
	IconButton,
	useColorModeValue,
	Text,
} from '@chakra-ui/react';
import { type FC } from 'react';
import { BiMailSend } from 'react-icons/bi';
import { ListHeader } from './ListHeader';
import { AboutInfo } from './AboutInfo';
import { ListMenu } from './ListMenu';
import { useFooterStore } from 'client/stores/FooterStore/FooterStore';

export const Footer: FC = () => {
	const { footer: { box1_pages, box1_title, box2_pages, box2_title, newsletter_content, newsletter_title } } = useFooterStore();

	return (
		<Box
			bg={useColorModeValue('gray.50', 'gray.900')}
			color={useColorModeValue('gray.700', 'gray.200')}
		>
			<Container as={Stack} maxW={'6xl'} py={10}>
				<SimpleGrid
					templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
					spacing={8}
				>
					<Stack spacing={6}>
						<AboutInfo />
					</Stack>
					<Stack align={'flex-start'}>
						<ListMenu pages={box1_pages} title={box1_title} />
					</Stack>
					<Stack align={'flex-start'}>
						<ListMenu pages={box2_pages} title={box2_title} />
					</Stack>
					<Stack align={'flex-start'}>
						<ListHeader>{newsletter_title}</ListHeader>
						<Text>{newsletter_content}</Text>
						<Stack direction={'row'}>
							<Input
								placeholder={'Your email address'}
								bg={useColorModeValue(
									'blackAlpha.100',
									'whiteAlpha.100'
								)}
								border={0}
								_focus={{
									bg: 'whiteAlpha.300',
								}}
							/>
							<IconButton
								bg={useColorModeValue('green.400', 'green.800')}
								color={useColorModeValue('white', 'gray.800')}
								_hover={{
									bg: 'green.600',
								}}
								aria-label="Subscribe"
								icon={<BiMailSend />}
							/>
						</Stack>
					</Stack>
				</SimpleGrid>
			</Container>
		</Box>
	);
};
