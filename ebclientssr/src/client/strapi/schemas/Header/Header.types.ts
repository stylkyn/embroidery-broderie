import { type Page } from '../Page/Page.types';
import { type Image } from '../dataTypes/Image/Image.types';

export interface Header {
	id: string;
	logo: Image;
	main_pages?: Page[];
}
