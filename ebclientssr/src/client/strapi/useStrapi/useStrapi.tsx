import { useQuery } from 'graphql-hooks';
import { type StrapiEntityTypes } from '../schemas/schemas.types';
import { type UseStrapiProps, type UseStrapiResult } from './useStrapi.types';
import { buildBaseQuery } from './useStrapi.utils';

export const useStrapi = <T extends StrapiEntityTypes = StrapiEntityTypes>({
	entityType,
}: UseStrapiProps): UseStrapiResult<T> => {
	const query = buildBaseQuery({ entityType });
	const { loading, error, data } = useQuery(query, {
		// variables: {
		// 	limit: 10,
		// },
	});

	return {
		loading,
		error,
		data,
	};
};
