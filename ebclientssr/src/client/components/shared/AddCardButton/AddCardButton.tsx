import { Button } from '@chakra-ui/react';
import { type FC } from 'react';
import { MdShoppingBasket } from 'react-icons/md';

export const AddCardButton: FC = () => (
	<Button
		leftIcon={<MdShoppingBasket />}
		colorScheme="pink"
		variant="outline"
		w="half"
	>
		Add to Card
	</Button>
);
