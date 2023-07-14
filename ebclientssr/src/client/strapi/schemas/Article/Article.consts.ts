import { type Attributes } from '../../queryBuilder/attributes/attributes.types';

export const ARTICLE_ATTR: Attributes<'article'> = {
	short_name: null,
	url: null,
	content: null,
	type: null,
} as const;
