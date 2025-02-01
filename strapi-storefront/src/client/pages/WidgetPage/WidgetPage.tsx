import { useParams } from 'react-router-dom';
import { type FC } from 'react';
import { Container } from '@chakra-ui/react';
import { WidgetPageStoreProvider } from 'client/stores/WidgetPageStore/WidgetPageStore';
import { WidgetsSwitch } from 'client/components/Widgets/WidgetsSwitch';

export const WidgetPage: FC = () => {
	const { pageUrl } = useParams();

	return (
		<WidgetPageStoreProvider
			filters={{
				url: {
					eq: pageUrl,
				},
			}}
		>
			<Container maxW="8xl" marginTop="1rem" marginBottom="1rem">
				<WidgetsSwitch />
			</Container>
		</WidgetPageStoreProvider>
	);
};
