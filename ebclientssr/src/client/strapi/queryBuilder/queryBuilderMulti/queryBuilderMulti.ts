import { STRAPI_ENTITY_TYPES_MAPPER_PLURAL } from '../../schemas/schemas.utils'
import { type QueryParamsMultiProps, type BuildBaseQueryMultiProps } from './queryBuilderMulti.types'
import { type StrapiEntityTypes } from '../../schemas/schemas.types';
import { filtersToGraphQl } from '../filters/filters';
import { toGraphQlAttributes } from '../attributes/attributes';
import { paginationToGraphQl } from '../pagination/pagination';
import { sortToGraphQl } from '../sort/sort';

export const buildQueryMulti = <T extends StrapiEntityTypes>({
    entityType,
    attributes,
    filters,
    pagination,
    sort
}: BuildBaseQueryMultiProps<T>): string => {
    const params = queryParams({ filters, pagination, sort });
    return `query ${STRAPI_ENTITY_TYPES_MAPPER_PLURAL[entityType]}{
        ${STRAPI_ENTITY_TYPES_MAPPER_PLURAL[entityType]}${params}  {
            data {
                id,
                attributes {${toGraphQlAttributes(attributes)}}
            }
        }
    }`
}

const queryParams = <T extends StrapiEntityTypes>({ filters, pagination, sort }: QueryParamsMultiProps<T>): string => {
    const filtersStr = filtersToGraphQl<T>(filters);
    const paginationStr = paginationToGraphQl(pagination);
    const sortStr = sortToGraphQl<T>(sort);

    if (!filtersStr && !paginationStr && !sortStr) {
        return '';
    }

    const mergeParams = [filtersStr, sortStr, paginationStr].join(', ');
    return `(${mergeParams})`
}
