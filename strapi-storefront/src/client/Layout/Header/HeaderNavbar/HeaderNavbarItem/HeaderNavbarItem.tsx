import {
	Box,
	Stack,
	useColorModeValue,
	Link,
	PopoverTrigger,
	Popover,
	PopoverContent,
} from '@chakra-ui/react';
import {
	buildPagePath,
} from 'client/Layout/LayoutRoutes/LayoutRoutes.utils';
import { type FC } from 'react';
import { type HeaderNavbarItemProps } from './HeaderNavbarItem.types';
import { HeaderNavbarSubItem } from './HeaderNavbarSubItem/HeaderNavbarSubItem';

export const HeaderNavbarItem: FC<HeaderNavbarItemProps> = ({
	page,
	isFixed = false,
}) => {
	const linkColor = useColorModeValue('gray.600', 'gray.200');
	const linkHoverColor = useColorModeValue('gray.800', 'white');
	const popoverContentBgColor = useColorModeValue('white', 'gray.800');

	return (
		<Box key={page.id}>
			<Popover trigger={'hover'} placement={'bottom-start'}>
				<PopoverTrigger>
					<Link
						p={2}
						href={buildPagePath(page)}
						fontSize={'sm'}
						fontWeight={500}
						color={linkColor}
						_hover={{
							textDecoration: 'none',
							color: linkHoverColor,
						}}
					>
						{page.name}
					</Link>
				</PopoverTrigger>

				{page.pages?.length ? (
					<PopoverContent
						border={0}
						boxShadow={'xl'}
						bg={popoverContentBgColor}
						p={4}
						rounded={'xl'}
						minW={'sm'}
					>
						<Stack>
							{page.pages.map((subpage) => (
								<HeaderNavbarSubItem
									key={subpage.id}
									page={subpage}
								/>
							))}
						</Stack>
					</PopoverContent>
				) : null}
			</Popover>
		</Box>
	);
};
