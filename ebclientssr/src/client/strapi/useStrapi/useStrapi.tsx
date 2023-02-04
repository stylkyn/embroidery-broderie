import { useQuery } from 'graphql-hooks';
import { buildQueryMulti } from '../queryBuilder/queryBuilderMulti/queryBuilderMulti';
import { type StrapiEntityTypes } from '../schemas/schemas.types';
import { STRAPI_ENTITY_TYPES_MAPPER_PLURAL, toSchemaData } from '../schemas/schemas.utils';
import { type StrapiRawData } from '../types/Strapi.types';
import { type UseStrapiProps, type UseStrapiResult } from './useStrapi.types';

export const useStrapi = <T extends StrapiEntityTypes = StrapiEntityTypes>({
	entityType,
	attributes,
	filters,
	pagination,
	sort,
}: UseStrapiProps<T>): UseStrapiResult<T> => {
	const query = buildQueryMulti<T>({ entityType, attributes, filters, pagination, sort });
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
