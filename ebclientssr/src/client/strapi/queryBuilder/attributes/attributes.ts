import { isObject, reduce } from 'lodash';
import { type Attributes } from './attributes.types';

export const toGraphQlAttributes = (attributes: Attributes): string => {
    const graphQlAttributesObject = toGraphQlAttributesObject(attributes);
    const graphQlAttributesObjectString = graphQlAttributesToString(graphQlAttributesObject);

    return graphQlAttributesObjectString;
}

export const toGraphQlAttributesObject = (attributes: Attributes): object => {
    return reduce(attributes, (accum, value, key) => {
        if (isObject(value)) {
            return {
                ...accum,
                [key]: {
                    data: {
                        id: null,
                        attributes: toGraphQlAttributesObject(value),
                    }
                }
            }
        }

        return {
            ...accum,
            [key]: null,
        }
    }, {})
}

const graphQlAttributesToString = (object: Record<string, any>): string => {
    return Object.keys(object).reduce((accum, key) => {
        const comma = accum.length ? ',' : '';

        const accumWithNextKey = `${accum}${comma} ${key}`;
        if (isObject(object[key])) {
            return `${accumWithNextKey} {${graphQlAttributesToString(object[key])}}`;
        }

        return accumWithNextKey;
    }, '')
}
