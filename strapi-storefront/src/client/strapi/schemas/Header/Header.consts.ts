import { type Attributes } from '../../queryBuilder/attributes/attributes.types';
import { IMAGE_ATTR } from '../dataTypes/Image/Image.consts';

export const HEADER_ATTR: Attributes<'header'> = {
	logo: IMAGE_ATTR,
} as const;
