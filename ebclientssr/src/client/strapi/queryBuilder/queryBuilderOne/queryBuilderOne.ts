import { type BuildBaseQueryOneProps } from './queryBuilderOne.types'
import { type StrapiEntityTypes } from '../../schemas/schemas.types';
import { toGraphQlAttributes } from '../attributes/attributes';

export const buildQueryOne = <T extends StrapiEntityTypes>({
    entityType,
    id,
    attributes,
}: BuildBaseQueryOneProps<T>): string => {
    return `query ${entityType}{
        ${entityType}(id: ${id})  {
            data {
                id,
                attributes {${toGraphQlAttributes(attributes)}}
            }
        }
    }`
}
