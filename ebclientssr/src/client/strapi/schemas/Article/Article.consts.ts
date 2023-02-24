import { type Attributes } from '../../queryBuilder/attributes/attributes.types';
import { IMAGE_ATTR } from '../dataTypes/Image/Image.consts';

export const CATEGORY_ATTR: Attributes<'category'> = {
    name: null,
    url: null,
    description: null,
    image_main: IMAGE_ATTR,
} as const
