import { createContext, useContext } from 'react';
import { useStrapi } from '../../strapi';
import { type CategoryStore } from './CategoryStore.types';

const CategoriesContext = createContext<CategoryStore>({
	categories: [],
	loading: false,
});

export const CategoriesContextProvider: FCC = ({ children }) => {
	// TODO: Testovaci kod
	// const { data: category } = useStrapiOne({
	// 	entityType: 'category',
	// 	id: 1,
	// 	attributes: {
	// 		name: null,
	// 		description: null,
	// 		categories: {
	// 			data: {
	// 				id: null,
	// 				attributes: {
	// 					name: null,
	// 					description: null,
	// 				},
	// 			},
	// 		},
	// 	},
	// });

	const { data, loading } = useStrapi({
		entityType: 'category',
		attributes: {
			name: null,
			description: null,
			categories: {
				data: {
					id: null,
					attributes: {
						name: null,
						description: null,
					},
				},
			},
		},
		// TODO: Testovaci kod
		// filters: {
		// 	and: [
		// 		{
		// 			id: {
		// 				in: [0, 1, 2, 3],
		// 			},
		// 		},
		// 		{
		// 			id: {
		// 				in: [0, 1, 2, 3],
		// 			},
		// 		},
		// 	],
		// },
		// sort: 'id:desc',
		// pagination: {
		// 	limit: 1,
		// 	start: 0,
		// },
	});

	return (
		<CategoriesContext.Provider
			value={{
				categories: data,
				loading,
			}}
		>
			{children}
		</CategoriesContext.Provider>
	);
};

export const useCategoriesContext = (): CategoryStore => useContext(CategoriesContext);
