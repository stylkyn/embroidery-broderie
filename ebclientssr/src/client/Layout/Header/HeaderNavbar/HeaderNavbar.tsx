import {
	Box,
	Stack,
	Link,
	Popover,
	PopoverTrigger,
	PopoverContent,
	useColorModeValue,
} from '@chakra-ui/react';
import { buildArticlePath } from 'client/Layout/LayoutRoutes/LayoutRoutes.utils';
import { usePagesStore } from 'client/stores/PagesStore/PagesStore';
import { type FC } from 'react';
import { HeaderNavbarItem } from './HeaderNavbarItem/HeaderNavbarItem';

export const HeaderNavbar: FC = () => {
	const linkColor = useColorModeValue('gray.600', 'gray.200');
	const linkHoverColor = useColorModeValue('gray.800', 'white');
	const popoverContentBgColor = useColorModeValue('white', 'gray.800');

	const { pages } = usePagesStore();

	return (
		<Stack direction={'row'} spacing={4}>
			{pages.map((page) => (
				<Box key={page.id}>
					<Popover trigger={'hover'} placement={'bottom-start'}>
						<PopoverTrigger>
							<Link
								p={2}
								href={buildArticlePath(page.url)}
								fontSize={'sm'}
								fontWeight={500}
								color={linkColor}
								_hover={{
									textDecoration: 'none',
									color: linkHoverColor,
								}}
							>
								{page.short_name}
							</Link>
						</PopoverTrigger>

						{page.articles.length ? (
							<PopoverContent
								border={0}
								boxShadow={'xl'}
								bg={popoverContentBgColor}
								p={4}
								rounded={'xl'}
								minW={'sm'}
							>
								<Stack>
									{page.articles.map((subpage) => (
										<HeaderNavbarItem
											key={subpage.id}
											page={subpage}
										/>
									))}
								</Stack>
							</PopoverContent>
						) : null}
					</Popover>
				</Box>
			))}
		</Stack>
	);
};
