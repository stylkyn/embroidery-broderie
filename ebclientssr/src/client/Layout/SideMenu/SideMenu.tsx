import {
	Box,
	useColorModeValue,
	Drawer,
	DrawerContent,
	useDisclosure,
} from '@chakra-ui/react';
import { SideMenuContent } from './SideMenuContent/SideMenuContent';
import { SideMenuMobile } from './SideMenuMobile/SideMenuMobile';

export const SideMenu: FCC = ({ children }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Box
			minH="100vh"
			w="240px"
			bg={useColorModeValue('gray.100', 'gray.900')}
		>
			<SideMenuContent
				onClose={() => onClose}
				display={{ base: 'none', md: 'block' }}
			/>
			<Drawer
				autoFocus={false}
				isOpen={isOpen}
				placement="left"
				onClose={onClose}
				returnFocusOnClose={false}
				onOverlayClick={onClose}
				size="full"
			>
				<DrawerContent>
					<SideMenuContent onClose={onClose} />
				</DrawerContent>
			</Drawer>
			{/* mobilenav */}
			<SideMenuMobile
				display={{ base: 'flex', md: 'none' }}
				onOpen={onOpen}
			/>
			<Box ml={{ base: 0, md: 60 }} p="4">
				{children}
			</Box>
		</Box>
	);
};
