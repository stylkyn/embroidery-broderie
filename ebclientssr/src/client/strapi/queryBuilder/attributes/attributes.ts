import { isObject, reduce } from 'lodash';
import { type Attributes } from './attributes.types';

export const toGraphQlAttributes = (attributes: Attributes): string => {
	const graphQlAttributesObject = toGraphQlAttributesObject(attributes);
	const graphQlAttributesObjectString = graphQlAttributesToString(
		graphQlAttributesObject
	);

	return graphQlAttributesObjectString;
};

export const toGraphQlAttributesObject = (attributes: Attributes): object => {
	return reduce(
		attributes,
		(accum, value, key) => {
			if (isObject(value)) {
				// components
				if (isDynamicContent(value)) {
					return {
						...accum,
						[key]: graphQlAttributesToDynamicContent(value),
					};
				}

				if (isComponent(value)) {
					// TODO: Vyresit any
					const { isComponent, ...restValue } = value as any;
					return {
						...accum,
						[key]: toGraphQlAttributesObject(restValue),
					};
				}

				return {
					...accum,
					[key]: {
						data: {
							id: null,
							attributes: toGraphQlAttributesObject(value),
						},
					},
				};
			}

			return {
				...accum,
				[key]: null,
			};
		},
		{}
	);
};

// Imlementace kuvli dynamic contentu - https://github.com/strapi/strapi/issues/4849 (... NazevContentu { ... })
const graphQlAttributesToDynamicContent = (
	object: Record<string, any>
): object => {
	const { isDynamicContent, ...validObject } = object;

	return Object.keys(validObject).reduce((accum: object, key: string) => {
		return {
			...accum,
			[`... on ${key}`]: toGraphQlAttributesObject(validObject[key]),
		};
	}, {});
};

const isDynamicContent = (value: Record<string, any>): boolean =>
	!!value.isDynamicContent;
const isComponent = (value: Record<string, any>): boolean =>
	!!value.isComponent;

const graphQlAttributesToString = (object: Record<string, any>): string => {
	return Object.keys(object).reduce((accum, key) => {
		const comma = accum.length ? ',' : '';

		const accumWithNextKey = `${accum}${comma} ${key}`;
		if (isObject(object[key])) {
			return `${accumWithNextKey} {${graphQlAttributesToString(
				object[key]
			)}}`;
		}

		return accumWithNextKey;
	}, '');
};
