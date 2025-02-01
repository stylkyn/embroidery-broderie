import { type FC } from 'react';
import {
	Box,
	CloseButton,
	Flex,
	useColorModeValue,
	type BoxProps,
} from '@chakra-ui/react';
import { SideMenuContentItem } from '../SideMenuContentItem/SideMenuContentItem';
import { useCategoriesStore } from 'client/stores';
import { CategoryContextProvider } from 'client/contexts';

interface SidebarProps extends BoxProps {
	onClose: () => void;
}

export const SideMenuContent: FC<SidebarProps> = ({ onClose, ...rest }) => {
	const { categories } = useCategoriesStore();

	return (
		<Box
			bg={useColorModeValue('white', 'gray.900')}
			borderRight="1px"
			borderRightColor={useColorModeValue('gray.200', 'gray.700')}
			w={{ base: 'full', md: 60 }}
			pos="fixed"
			h="full"
			{...rest}
		>
			<Flex
				h="5"
				alignItems="center"
				mx="8"
				justifyContent="space-between"
			>
				<CloseButton
					display={{ base: 'flex', md: 'none' }}
					onClick={onClose}
				/>
			</Flex>
			{categories.map((c) => (
				<CategoryContextProvider key={c.id} category={c}>
					<SideMenuContentItem>{c.name}</SideMenuContentItem>
				</CategoryContextProvider>
			))}
		</Box>
	);
};
