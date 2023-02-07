import { type Attributes } from '../../queryBuilder/attributes/attributes.types';

export const CATEGORY_ATTR: Attributes<'category'> = {
    name: null,
    url: null,
    description: null,
} as const
