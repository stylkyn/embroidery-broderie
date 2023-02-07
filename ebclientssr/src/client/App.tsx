import { type FC } from 'react';
import { MainLayout } from './Layout/MainLayout';
import { GraphQLClient, ClientContext } from 'graphql-hooks';
import { CategoriesStoreProvider } from './stores';
import { BEARER_TOKEN, GRAPHQL_URL } from './client.config';

const client = new GraphQLClient({
	url: GRAPHQL_URL,
	headers: {
		authorization: BEARER_TOKEN,
	},
});

export const App: FC = () => {
	return (
		<ClientContext.Provider value={client}>
			<CategoriesStoreProvider>
				<MainLayout />
			</CategoriesStoreProvider>
		</ClientContext.Provider>
	);
};

export default App;
