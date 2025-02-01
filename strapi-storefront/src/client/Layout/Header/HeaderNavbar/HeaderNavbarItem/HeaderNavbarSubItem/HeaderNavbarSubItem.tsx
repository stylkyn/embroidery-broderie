import { ChevronRightIcon } from '@chakra-ui/icons';
import {
	Box,
	Flex,
	Icon,
	Stack,
	useColorModeValue,
	Text,
	Link,
} from '@chakra-ui/react';
import { buildPagePath } from 'client/Layout/LayoutRoutes/LayoutRoutes.utils';
import { type FC } from 'react';
import { type HeaderNavbarSubItemProps } from './HeaderNavbarSubItem.types';

export const HeaderNavbarSubItem: FC<HeaderNavbarSubItemProps> = ({ page }) => {
	return (
		<Link
			href={buildPagePath(page)}
			role={'group'}
			display={'block'}
			p={2}
			rounded={'md'}
			_hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
		>
			<Stack direction={'row'} align={'center'}>
				<Box>
					<Text
						transition={'all .3s ease'}
						_groupHover={{ color: 'pink.400' }}
						fontWeight={500}
					>
						{page.name}
					</Text>
					{page.description && (
						<Text fontSize={'sm'}>{page.description}</Text>
					)}
				</Box>
				<Flex
					transition={'all .3s ease'}
					transform={'translateX(-10px)'}
					opacity={0}
					_groupHover={{
						opacity: '100%',
						transform: 'translateX(0)',
					}}
					justify={'flex-end'}
					align={'center'}
					flex={1}
				>
					<Icon
						color={'pink.400'}
						w={5}
						h={5}
						as={ChevronRightIcon}
					/>
				</Flex>
			</Stack>
		</Link>
	);
};
