import { type StrapiEntityTypes, type StrapiSchemasMapper } from '../schemas/schemas.types';

export type StrapiRawData<T extends StrapiEntityTypes> = Record<string, StrapiRawDataItem<T>>;
export type StrapiRawDataOne<T extends StrapiEntityTypes> = Record<string, StrapiRawDataItemOne<T>>;

export interface StrapiRawDataItem<T extends StrapiEntityTypes> {
    data: Array<StrapiRawDataEntity<T>>;
}
export interface StrapiRawDataItemOne<T extends StrapiEntityTypes> {
    data: StrapiRawDataEntity<T>;
}

interface StrapiRawDataEntity<T extends StrapiEntityTypes> {
    id: string;
    attributes: StrapiSchemasMapper[T];
}
