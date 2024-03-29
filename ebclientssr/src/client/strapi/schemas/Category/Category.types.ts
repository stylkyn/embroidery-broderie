import { type Image } from '../dataTypes/Image/Image.types';

export interface Category {
	id: string;
	name: string;
	description: string;
	url: string;
	parent_category?: Category;
	categories: Category[];
	image_main: Image;
	icon: string;
}
