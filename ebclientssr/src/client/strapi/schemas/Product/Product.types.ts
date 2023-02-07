import { type Category } from '../Category/Category.types';
import { type Image } from '../dataTypes/Image/Image.types';

export interface Product {
    id: string;
    name: string;
    description: string;
    url: string;
    categories: Category[];
    image_main: Image;
}
