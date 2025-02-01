import { type Attributes } from '../../queryBuilder/attributes/attributes.types';

export const ARTICLE_ATTR: Attributes<'article'> = {
	name: null,
	content: null,
} as const;
