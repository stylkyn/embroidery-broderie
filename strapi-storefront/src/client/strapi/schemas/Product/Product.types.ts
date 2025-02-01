import { type Category } from '../Category/Category.types';
import { type Image } from '../dataTypes/Image/Image.types';
import { type Price } from '../dataTypes/Price/Price.types';
import { type File } from '../dataTypes/File/File.types';

export interface Product {
	id: string;
	name: string;
	description: string;
	url: string;
	categories: Category[];
	mainCategory: Category;
	image_main: Image;
	files: File[];
	price: Price;
}
