import { type StrapiEntities, type StrapiEntityTypes, type StrapiSchemasMapper } from '../../schemas/schemas.types';

export type Attributes<T extends StrapiEntityTypes = StrapiEntityTypes> = AttributesInner<StrapiSchemasMapper[T]>;

type AttributesInner<E extends StrapiEntities> = {
    [K in keyof E]?: NonNullable<Unpack<E[K]>> extends object ?
    NonNullable<Unpack<E[K]>> extends StrapiEntities ? AttributesInner<NonNullable<Unpack<E[K]>>> : AttributesObject<NonNullable<Unpack<E[K]>>>
    : null
}

type AttributesObject<E extends object> = {
    [K in keyof E]?: NonNullable<E[K]> extends object ? AttributesObject<NonNullable<E[K]>> : null
}
