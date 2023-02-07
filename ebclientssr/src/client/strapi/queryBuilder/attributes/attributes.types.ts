import { type StrapiEntities, type StrapiEntityTypes, type StrapiSchemasMapper } from '../../schemas/schemas.types';

export type Attributes<T extends StrapiEntityTypes = StrapiEntityTypes> = AttributesInner<StrapiSchemasMapper[T]>;

type AttributesInner<E extends StrapiEntities> = {
    [K in keyof E]?: Unpack<E[K]> extends object ?
        Unpack<E[K]> extends StrapiEntities ? AttributesInner<Unpack<E[K]>> : AttributesObject<Unpack<E[K]>>
    : null
}

type AttributesObject<E extends object> = {
    [K in keyof E]?: E[K] extends object ? AttributesObject<E[K]> : null
}
