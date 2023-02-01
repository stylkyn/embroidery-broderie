import { type APIError } from 'graphql-hooks';
import { type StrapiSchemasMapper, type StrapiEntityTypes } from '../schemas/schemas.types';

export interface UseStrapiProps {
    entityType: StrapiEntityTypes;
}

export interface UseStrapiResult<T extends StrapiEntityTypes> {
    loading: boolean;
    error: APIError | undefined;
    data: Array<StrapiSchemasMapper[T]>;
}

export interface BuildBaseQueryProps {
    entityType: StrapiEntityTypes;
}

export type StrapiRawData<T extends StrapiEntityTypes> = Record<string, {
    data: Array<{
        id: string;
        attributes: StrapiSchemasMapper[T];
    }>;
}>
