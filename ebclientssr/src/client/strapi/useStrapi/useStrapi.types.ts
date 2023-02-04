import { type APIError } from 'graphql-hooks';
import { type StrapiSchemasMapper, type StrapiEntityTypes } from '../schemas/schemas.types';

export interface UseStrapiProps {
    entityType: StrapiEntityTypes;
    attributes: object;
}

export interface UseStrapiResult<T extends StrapiEntityTypes> {
    loading: boolean;
    error: APIError | undefined;
    data: Array<StrapiSchemasMapper[T]>;
}

export interface BuildBaseQueryProps {
    entityType: StrapiEntityTypes;
    attributes: object;
}

export type StrapiRawData<T extends StrapiEntityTypes> = Record<string, StrapiRawDataItem<T>>;

export interface StrapiRawDataItem<T extends StrapiEntityTypes> {
    data: Array<{
        id: string;
        attributes: StrapiSchemasMapper[T];
    }>;
}
