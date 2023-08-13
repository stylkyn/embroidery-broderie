import { type Attributes } from '../../queryBuilder/attributes/attributes.types';
import { IMAGE_ATTR } from '../dataTypes/Image/Image.consts';

export const FOOTER_ATTR: Attributes<'footer'> = {
	logo: IMAGE_ATTR,
	title: null,
	box1_title: null,
	box2_title: null,
	newsletter_title: null,
	newsletter_content: null,
} as const;
