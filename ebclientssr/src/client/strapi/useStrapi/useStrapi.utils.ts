import { type StrapiEntityTypes, type StrapiSchemasMapper } from '../schemas/schemas.types'
import { STRAPI_ENTITY_TYPES_MAPPER_PLURAL } from '../schemas/schemas.utils'
import { type StrapiRawData, type BuildBaseQueryProps } from './useStrapi.types'

// TODO: Dodelat where, limit atd...

export const buildBaseQuery = ({
    entityType
}: BuildBaseQueryProps): string => {
    return `query ${STRAPI_ENTITY_TYPES_MAPPER_PLURAL[entityType]} {
        ${STRAPI_ENTITY_TYPES_MAPPER_PLURAL[entityType]} {
            data {
                id,
                attributes {
                    name,
                    description,
                }
            }
        }
    }`
}

export const toSchemaData = <T extends StrapiEntityTypes>(rawData: StrapiRawData<T>, entityType: StrapiEntityTypes): Array<StrapiSchemasMapper[T]> => {
    return rawData[STRAPI_ENTITY_TYPES_MAPPER_PLURAL[entityType]].data.map(({ id, attributes }) => ({
        ...attributes,
        id,
    }));
}
