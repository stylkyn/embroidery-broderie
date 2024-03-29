import { Text } from '@chakra-ui/react';

export const ListHeader: FCC = ({ children }) => {
	return (
		<Text fontWeight={'500'} fontSize={'lg'} mb={2}>
			{children}
		</Text>
	);
};
