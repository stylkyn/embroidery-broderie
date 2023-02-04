import { type StrapiEntityTypes, type StrapiSchemasMapper } from '../schemas/schemas.types';

export type Sort<T extends StrapiEntityTypes> = SortColumn<T> | SortWithOrder<T> | Array<SortColumn<T> | SortWithOrder<T>>

export type SortOrder = 'desc' | 'asc';
export type SortColumn<T extends StrapiEntityTypes> = `${string & keyof StrapiSchemasMapper[T]}`;
export type SortWithOrder<T extends StrapiEntityTypes> = `${string & keyof StrapiSchemasMapper[T]}:${SortOrder}`;
