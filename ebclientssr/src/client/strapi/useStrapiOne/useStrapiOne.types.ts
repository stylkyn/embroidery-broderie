import { type APIError } from 'graphql-hooks';
import { type StrapiSchemasMapper, type StrapiEntityTypes } from '../schemas/schemas.types';

export interface UseStrapiOneProps<T extends StrapiEntityTypes> {
    entityType: T;
    attributes: object;
    id: number;
}

export interface UseStrapiOneResult<T extends StrapiEntityTypes> {
    loading: boolean;
    error: APIError | undefined;
    data: StrapiSchemasMapper[T] | null;
}
