import { type FC } from 'react';
import { MainLayout } from './components/mainLayout/MainLayout';
import { GraphQLClient, ClientContext } from 'graphql-hooks';
import { CategoriesContextProvider } from './stores';
import { GRAPHQL_URL } from './client.config';

const client = new GraphQLClient({
	url: GRAPHQL_URL,
	headers: {
		authorization:
			'Bearer be4399c4806d59f2da7d356a48040a154a26fa832a49aee45b21e9b4268f97674ab2e3ff3980060b5854e4b4c9daed572a16fdd81b68f6ec878ef0ea817d32aa01557aaa983778781d3c93b0cf130ccd85411f2a78d50c930180f28691d5f07aa7b7fd7e53e31b7972f8fb5317592fe553c5f40950bd23aa317c260cb1b11ee3',
	},
});

export const App: FC = () => {
	return (
		<ClientContext.Provider value={client}>
			<CategoriesContextProvider>
				<MainLayout />
			</CategoriesContextProvider>
		</ClientContext.Provider>
	);
};

export default App;
