import { type FC } from 'react';
import { type WidgetCategoryCard as WidgetCategoryCardType } from 'client/strapi/schemas/Widget/WidgetCategoryCard/WidgetCategoryCard.types';
import { CategoryCard } from 'client/components';
import { CategoryContextProvider } from 'client/contexts';
import { Box, Heading, Wrap, WrapItem, Text, VStack } from '@chakra-ui/react';

export const WidgetCategoryCard: FC<{ widget: WidgetCategoryCardType }> = ({
	widget,
}) => (
	<Box>
		<VStack spacing={2}>
			<Heading size="lg">{widget.name}</Heading>
			<Text>{widget.description}</Text>
			<Wrap spacing="20px" justify="center">
				{widget.categories?.map((category) => (
					<CategoryContextProvider
						key={category.id}
						category={category}
					>
						<WrapItem maxW="20rem">
							<CategoryCard />
						</WrapItem>
					</CategoryContextProvider>
				))}
			</Wrap>
		</VStack>
	</Box>
);
