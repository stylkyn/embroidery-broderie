import { useQuery } from 'graphql-hooks';
import { type StrapiEntityTypes } from '../schemas/schemas.types';
import { type StrapiRawData, type UseStrapiProps, type UseStrapiResult } from './useStrapi.types';
import { buildBaseQuery, toSchemaData } from './useStrapi.utils';

export const useStrapi = <T extends StrapiEntityTypes = StrapiEntityTypes>({
	entityType,
}: UseStrapiProps): UseStrapiResult<T> => {
	const query = buildBaseQuery({ entityType });
	const {
		loading,
		error,
		data: rawData,
	} = useQuery<StrapiRawData<T>>(query, {
		// variables: {
		// 	limit: 10,
		// },
	});

	if (error) {
		console.error(`API problem ${entityType}`);
		throw new Error(`API problem ${entityType}`);
	}

	return {
		loading,
		error,
		data: rawData ? toSchemaData(rawData, entityType) : [],
	};
};
