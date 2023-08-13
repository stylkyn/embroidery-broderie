import { type Attributes } from '../../queryBuilder/attributes/attributes.types';

export const PAGE_ATTR: Attributes<'page'> = {
	name: null,
	description: null,
	url: null,
	type: null,
} as const;
