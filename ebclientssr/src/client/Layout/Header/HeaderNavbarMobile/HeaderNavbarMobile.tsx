import { Stack, useColorModeValue } from '@chakra-ui/react';
import { type FC } from 'react';
import { HeaderNavbarMobileItem } from '../HeaderNavbarMobileItem/HeaderNavbarMobileItem';

export const HeaderNavbarMobile: FC = () => {
	return (
		<Stack
			bg={useColorModeValue('white', 'gray.800')}
			p={4}
			display={{ md: 'none' }}
		>
			{NAV_ITEMS.map((navItem) => (
				<HeaderNavbarMobileItem key={navItem.label} {...navItem} />
			))}
		</Stack>
	);
};
