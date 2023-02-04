import { useQuery } from 'graphql-hooks';
import { buildQueryOne } from '../queryBuilder/queryBuilderOne/queryBuilderOne';
import { type StrapiEntityTypes } from '../schemas/schemas.types';
import { toSchemaDataOne } from '../schemas/schemas.utils';
import { type StrapiRawDataOne } from '../types/Strapi.types';
import { type UseStrapiOneProps, type UseStrapiOneResult } from './useStrapiOne.types';

export const useStrapiOne = <T extends StrapiEntityTypes = StrapiEntityTypes>({
	entityType,
	id,
	attributes,
}: UseStrapiOneProps<T>): UseStrapiOneResult<T> => {
	const query = buildQueryOne<T>({ entityType, id, attributes });
	const { loading, error, data: rawData } = useQuery<StrapiRawDataOne<T>>(query);

	if (error) {
		// eslint-disable-next-line no-console
		console.error(`API problem ${entityType}`);
		throw new Error(`API problem ${entityType}`);
	}

	return {
		loading,
		error,
		data: rawData ? toSchemaDataOne(rawData[entityType]) : null,
	};
};
