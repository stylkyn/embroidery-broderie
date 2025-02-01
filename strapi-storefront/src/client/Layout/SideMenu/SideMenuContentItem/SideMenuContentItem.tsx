import { type FC, type ReactNode } from 'react';
import { Flex, Icon, Link, type FlexProps } from '@chakra-ui/react';
import { buildCategoryPath } from 'client/Layout/LayoutRoutes/LayoutRoutes.utils';
import { useParams } from 'react-router-dom';
import { useCategory } from 'client/contexts';

interface SideMenuContentItemProps extends FlexProps {
	children: ReactNode;
}
export const SideMenuContentItem: FC<SideMenuContentItemProps> = ({
	children,
	...rest
}) => {
	const { categoryUrl } = useParams();
	const { category } = useCategory();

	if (!category) {
		return null;
	}

	const isActive = category.url === categoryUrl;
	return (
		<Link
			href={buildCategoryPath(category.url)}
			style={{ textDecoration: 'none' }}
			_focus={{ boxShadow: 'none' }}
		>
			<Flex
				align="center"
				p="3"
				mx="4"
				my="1"
				borderRadius="lg"
				role="group"
				cursor="pointer"
				_active={{
					bg: 'pink.400',
					color: 'white',
				}}
				_hover={{
					bg: 'pink.300',
					color: 'white',
				}}
				bg={isActive ? 'pink.400' : 'transparent'}
				color={isActive ? 'white' : 'inherit'}
				{...rest}
			>
				{category.icon && (
					<Icon
						mr="4"
						fontSize="16"
						_groupHover={{
							color: 'white',
						}}
					/>
				)}
				{children}
			</Flex>
		</Link>
	);
};
