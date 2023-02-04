import { reduce } from 'lodash';
import { type StrapiRawDataItemOne, type StrapiRawDataItem } from '../types/Strapi.types';
import { type StrapiSchemasMapper, type StrapiEntityTypes } from './schemas.types';

export const STRAPI_ENTITY_TYPES_MAPPER_PLURAL: Record<StrapiEntityTypes, string> = {
    category: 'categories',
}

export const isRelation = <T extends StrapiEntityTypes >(value: StrapiRawDataItem<T> | any): value is StrapiRawDataItem<T> => {
    return !!(value as StrapiRawDataItem<T>).data;
}

export const toSchemaData = <T extends StrapiEntityTypes>(item: StrapiRawDataItem<T>): Array<StrapiSchemasMapper[T]> => {
    return item.data.map(({ id, attributes }) => {

        const flatAttributes = reduce(attributes, (accum, value, key) => {
            if (isRelation(value)) {
                return { ...accum, [key]: toSchemaData(value) };
            }

            return { ...accum, [key]: value };
        // TODO: Dotypovat
        }, {}) as Record<keyof StrapiSchemasMapper[T], any>

        return {
            ...flatAttributes,
            id,
        };
    });
}

export const toSchemaDataOne = <T extends StrapiEntityTypes>(item: StrapiRawDataItemOne<T>): StrapiSchemasMapper[T] => {
    const flatAttributes = reduce(item.data.attributes, (accum, value, key) => {
        if (isRelation(value)) {
            return { ...accum, [key]: toSchemaData(value) };
        }

        return { ...accum, [key]: value };
    // TODO: Dotypovat
    }, {}) as Record<keyof StrapiSchemasMapper[T], any>

    return {
        ...flatAttributes,
        id: item.data.id,
    };
}
