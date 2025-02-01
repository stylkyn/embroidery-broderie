import { type FC } from 'react';
import { MainLayout } from './Layout/MainLayout';
import { GraphQLClient, ClientContext } from 'graphql-hooks';
import { BEARER_TOKEN, GRAPHQL_URL } from './client.config';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';

const theme = extendTheme({
	styles: {
		global: () => ({
			button: {
				bg: '',
			},
		}),
	},
});

const client = new GraphQLClient({
	url: GRAPHQL_URL,
	headers: {
		authorization: BEARER_TOKEN,
	},
});

export const App: FC = () => {
	return (
		<ChakraProvider theme={theme}>
			<ClientContext.Provider value={client}>
				<MainLayout />
			</ClientContext.Provider>
		</ChakraProvider>
	);
};

export default App;
