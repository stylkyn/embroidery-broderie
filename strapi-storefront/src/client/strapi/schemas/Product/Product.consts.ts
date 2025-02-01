import { type Attributes } from '../../queryBuilder/attributes/attributes.types';
import { FILE_ATTR } from '../dataTypes/File/File.consts';
import { IMAGE_ATTR } from '../dataTypes/Image/Image.consts';
import { PRICE_ATTR } from '../dataTypes/Price/Price.consts';

export const PRODUCT_ATTR: Attributes<'product'> = {
	name: null,
	url: null,
	description: null,
	image_main: IMAGE_ATTR,
	files: FILE_ATTR,
	price: PRICE_ATTR,
} as const;
