import { type FC } from 'react';
import { type WidgetProductCard as WidgetProductCardType } from 'client/strapi/schemas/Widget/WidgetProductCard/WidgetProductCard.types';
import { Box, Heading, Wrap, WrapItem, Text, VStack } from '@chakra-ui/react';
import { ProductContextProvider } from 'client/contexts';
import { ProductCard } from 'client/components';

export const WidgetProductCard: FC<{ widget: WidgetProductCardType }> = ({
	widget,
}) => (
	<Box>
		<VStack spacing={2}>
			<Heading size="lg">{widget.name}</Heading>
			<Text>{widget.description}</Text>
			<Wrap spacing="20px" justify="center">
				{widget.products?.map((product) => (
					<ProductContextProvider key={product.id} product={product}>
						<WrapItem maxW="20rem">
							<ProductCard />
						</WrapItem>
					</ProductContextProvider>
				))}
			</Wrap>
		</VStack>
	</Box>
);
