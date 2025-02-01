import { Stack } from '@chakra-ui/react';
import { useHeaderStore } from 'client/stores/HeaderStore/HeaderStore';
import { type FC } from 'react';
import { HeaderNavbarItem } from './HeaderNavbarItem/HeaderNavbarItem';

export const HeaderNavbar: FC = () => {
	const { header, loading } = useHeaderStore();

	if (loading) {
		return <>loading</>;
	}

	return (
		<Stack direction={'row'} spacing={4}>
			{header?.main_pages?.map((page) => (
				<HeaderNavbarItem key={page.id} page={page} />
			))}
		</Stack>
	);
};
