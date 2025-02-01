import { type StrapiEntityTypes } from '../../schemas/schemas.types';
import { type Sort } from '../sort/sort.types';
import { type Filters } from '../filters/filters.types';
import { type Pagination } from '../pagination/pagination.types';

export interface BuildBaseQueryMultiProps<T extends StrapiEntityTypes> {
    entityType: T;
    attributes: object;
    filters?: Filters<T>;
    pagination?: Pagination;
    sort?: Sort<T>;
}

export interface QueryParamsMultiProps<T extends StrapiEntityTypes> {
    filters?: Filters<T>;
    pagination?: Pagination;
    sort?: Sort<T>;
}
