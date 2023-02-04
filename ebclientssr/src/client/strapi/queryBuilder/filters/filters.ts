import { isArray, isObject, keys } from 'lodash';
import { type Filters } from '../filters/filters.types';
import { type StrapiEntityTypes } from '../../schemas/schemas.types';
import { LOGICAL_OPERATORS } from './filters.consts';

export const filtersToGraphQl = <T extends StrapiEntityTypes>(filters?: Filters<T>): string | undefined => {
    if (!filters || !keys(filters).length) {
        return undefined;
    }

    return `filters: {${filtersParamsToGraphQl(filters)}}`;
}

const filtersParamsToGraphQl = (object: Record<string, any>): string => {
    return Object.keys(object).reduce((accum, key) => {
        const comma = accum.length ? ',' : '';

        const accumWithNextKey = `${accum}${comma} ${key}`;
        const objectValue = object[key];

        // jenda se o logicky operator (or, and, not)
        if (isLogicalOperator(key)) {
            const operatorValues = objectValue as any[];
            const operatorValuesParsed = operatorValues.map(value => `{${filtersParamsToGraphQl(value)}}`);
            const operatorValuesParsedJoined = operatorValuesParsed.join(', ');
            return `${accumWithNextKey}: [${operatorValuesParsedJoined}]`;
        }

        // jedna se o hodnotu operatoru [1, 2, 3]
        if (isArray(objectValue)) {
            return `${accumWithNextKey}: ${JSON.stringify(objectValue)} `;
        }

        // jedna se o zanorenou vazbu
        if (isObject(objectValue)) {
            return `${accumWithNextKey}: {${filtersParamsToGraphQl(objectValue)}} `;
        }

        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        return `${accumWithNextKey}: ${JSON.stringify(objectValue)}`;
    }, '')
}

const isLogicalOperator = (key: string): boolean => LOGICAL_OPERATORS.includes(key);
