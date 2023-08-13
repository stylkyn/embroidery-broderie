import { type Page } from '../Page/Page.types';
import { type Image } from '../dataTypes/Image/Image.types';

export interface Footer {
	id: string;
	logo: Image;
	title: string;
	box1_title: string;
	box1_pages: Page[];
	box2_title: string;
	box2_pages: Page[];
	newsletter_title: string;
	newsletter_content: string;
}
