import { type StrapiEntityTypes, type StrapiSchemasMapper } from '../schemas/schemas.types'
import { STRAPI_ENTITY_TYPES_MAPPER_PLURAL } from '../schemas/schemas.utils'
import { type StrapiRawDataItem, type BuildBaseQueryProps } from './useStrapi.types'
import { isObject, reduce } from 'lodash';

export const isRelation = <T extends StrapiEntityTypes >(value: StrapiRawDataItem<T> | any): value is StrapiRawDataItem<T> => {
    return !!(value as StrapiRawDataItem<T>).data;
}

const toGraphQlAttributes = (object: Record<string, any>): string => {
    return Object.keys(object).reduce((accum, key) => {
        const comma = accum.length ? ',' : '';

        const accumWithNextKey = `${accum}${comma} ${key}`;
        if (isObject(object[key])) {
            return `${accumWithNextKey} {${toGraphQlAttributes(object[key])}}`;
        }

        return accumWithNextKey;
    }, '')
}

export const buildBaseQuery = ({
    entityType,
    attributes
}: BuildBaseQueryProps): string => {
    return `query ${STRAPI_ENTITY_TYPES_MAPPER_PLURAL[entityType]} {
        ${STRAPI_ENTITY_TYPES_MAPPER_PLURAL[entityType]} {
            data {
                id,
                attributes {${toGraphQlAttributes(attributes)}}
            }
        }
    }`
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
