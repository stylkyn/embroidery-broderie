import { type FC } from 'react';
import { MainLayout } from './components/mainLayout/MainLayout';
import { GraphQLClient, ClientContext } from 'graphql-hooks';

const client = new GraphQLClient({
	url: '/graphql',
});

export const App: FC = () => {
	return (
		<ClientContext.Provider value={client}>
			<MainLayout />
		</ClientContext.Provider>
	);
};

export default App;
