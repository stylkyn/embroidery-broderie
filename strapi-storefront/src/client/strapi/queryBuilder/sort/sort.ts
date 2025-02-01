import { type StrapiEntityTypes } from '../..//schemas/schemas.types';
import { type Sort } from './sort.types';

export const sortToGraphQl = <T extends StrapiEntityTypes>(sort?: Sort<T>): string | undefined => {
    if (!sort) {
        return undefined;
    }

    return `sort: ${JSON.stringify(sort)}`
}
