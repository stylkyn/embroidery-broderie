import { type BuildBaseQueryProps } from './useStrapi.types'

// TODO: Dodelat where, limit atd...

export const buildBaseQuery = ({
    entityType
}: BuildBaseQueryProps): string => {
    return `query ${entityType} {
        ${entityType} {
            id
            name
        }
    }`
}
