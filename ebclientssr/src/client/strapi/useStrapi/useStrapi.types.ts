import { type APIError } from 'graphql-hooks';
import { type StrapiSchemasMapper, type StrapiEntityTypes } from '../schemas/schemas.types';
import { type Filters } from '../queryBuilder/filters/filters.types'
import { type Pagination } from '../queryBuilder/pagination/pagination.types';
import { type Sort } from '../queryBuilder/sort/sort.types';

export interface UseStrapiProps<T extends StrapiEntityTypes> {
    entityType: T;
    attributes: object;
    filters?: Filters<T>;
    pagination?: Pagination;
    sort?: Sort<T>;
}

export interface UseStrapiResult<T extends StrapiEntityTypes> {
    loading: boolean;
    error: APIError | undefined;
    data: Array<StrapiSchemasMapper[T]>;
}
