import { type StrapiSchemasMapper, type StrapiEntityTypes, type StrapiEntities } from '../schemas/schemas.types';

export type Operator =
    | 'eq'
    | 'ne'
    | 'lt'
    | 'lte'
    | 'gt'
    | 'gte'
    | 'in'
    | 'notIn'
    | 'contains'
    | 'notContains'
    | 'containsi'
    | 'notContainsi'
    | 'null'
    | 'notNull'
    | 'between'
    | 'startsWith'
    | 'endsWith';

export type LogicalOperator = 'and' | 'or' | 'not';

type PartialRecord<K extends keyof any, T> = {
    [P in K]?: T;
  };

export type Filters<T extends StrapiEntityTypes> = FiltersInner<StrapiSchemasMapper[T]>

type FiltersInner<E extends StrapiEntities> = {
    [P in keyof E]?: Unpack<E[P]> extends StrapiEntities ? FiltersInner<Unpack<E[P]>> : FiltersItem;
} | {
    [P in LogicalOperator]?: Array<FiltersInner<E>>
}
type FiltersItem = PartialRecord<Operator, any>;
