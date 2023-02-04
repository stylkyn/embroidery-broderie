import { isObject } from 'lodash';

export const toGraphQlAttributes = (object: Record<string, any>): string => {
    return Object.keys(object).reduce((accum, key) => {
        const comma = accum.length ? ',' : '';

        const accumWithNextKey = `${accum}${comma} ${key}`;
        if (isObject(object[key])) {
            return `${accumWithNextKey} {${toGraphQlAttributes(object[key])}}`;
        }

        return accumWithNextKey;
    }, '')
}
