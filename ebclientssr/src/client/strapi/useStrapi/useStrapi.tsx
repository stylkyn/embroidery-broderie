import { useQuery } from 'graphql-hooks';
import { type StrapiEntityTypes } from '../schemas/schemas.types';
import { STRAPI_ENTITY_TYPES_MAPPER_PLURAL } from '../schemas/schemas.utils';
import { type StrapiRawData, type UseStrapiProps, type UseStrapiResult } from './useStrapi.types';
import { buildBaseQuery, toSchemaData } from './useStrapi.utils';

export const useStrapi = <T extends StrapiEntityTypes = StrapiEntityTypes>({
	entityType,
	attributes,
}: UseStrapiProps): UseStrapiResult<T> => {
	const query = buildBaseQuery({ entityType, attributes });
	const { loading, error, data: rawData } = useQuery<StrapiRawData<T>>(query);

	if (error) {
		// eslint-disable-next-line no-console
		console.error(`API problem ${entityType}`);
		throw new Error(`API problem ${entityType}`);
	}

	return {
		loading,
		error,
		data: rawData ? toSchemaData(rawData[STRAPI_ENTITY_TYPES_MAPPER_PLURAL[entityType]]) : [],
	};
};
