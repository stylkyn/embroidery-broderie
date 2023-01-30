import { Layout, theme } from 'antd';
import { FC } from 'react';

const { Content: ContentAntd } = Layout;

export const Content: FC = () => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<Layout style={{ padding: '0 24px 24px' }}>
			<ContentAntd
				style={{
					padding: 24,
					margin: 0,
					minHeight: 280,
					background: colorBgContainer,
				}}
			>
				Content
			</ContentAntd>
		</Layout>
	);
};
