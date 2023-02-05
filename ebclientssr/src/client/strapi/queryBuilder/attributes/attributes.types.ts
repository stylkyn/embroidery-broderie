import { type StrapiEntities, type StrapiEntityTypes, type StrapiSchemasMapper } from '../../schemas/schemas.types';

export type Attributes<T extends StrapiEntityTypes = StrapiEntityTypes> = AttributesInner<StrapiSchemasMapper[T]>;

type AttributesInner<E extends StrapiEntities> = {
    [K in keyof E]?: Unpack<E[K]> extends StrapiEntities ? AttributesInner<Unpack<E[K]>> : null
}
