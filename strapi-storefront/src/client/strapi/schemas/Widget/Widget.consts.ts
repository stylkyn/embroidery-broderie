import { type Attributes } from '../../queryBuilder/attributes/attributes.types';

export const WIDGET_ATTR: Attributes<'widget'> = {
	name: null,
	description: null,
	url: null,
	type: null,
} as const;
