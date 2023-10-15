import { Box, VStack } from '@chakra-ui/react';
import { useWidgetPageStore } from 'client/stores/WidgetPageStore/WidgetPageStore';
import { type FC } from 'react';
import { Widget } from './Widget/Widget';

export const WidgetsSwitch: FC = () => {
	const { widgetPage, loading } = useWidgetPageStore();

	if (loading || !widgetPage) {
		return null;
	}

	const { widgets } = widgetPage;

	return (
		<VStack spacing="2rem">
			{widgets?.map((widget, index) => {
				return (
					<Box key={index}>
						<Widget widget={widget} />
					</Box>
				);
			})}
		</VStack>
	);
};
