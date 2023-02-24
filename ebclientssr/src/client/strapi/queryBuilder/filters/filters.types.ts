import { type StrapiSchemasMapper, type StrapiEntityTypes, type StrapiEntities } from '../../schemas/schemas.types';

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

export type Filters<T extends StrapiEntityTypes = StrapiEntityTypes> = FiltersInner<StrapiSchemasMapper[T]>

type FiltersInner<E extends StrapiEntities> = {
    [P in keyof E]?: NonNullable<Unpack<E[P]>> extends StrapiEntities ? FiltersInner<NonNullable<Unpack<E[P]>>> : FiltersItem;
} | {
    [P in LogicalOperator]?: Array<FiltersInner<E>>
}
type FiltersItem = PartialRecord<Operator, any>;
