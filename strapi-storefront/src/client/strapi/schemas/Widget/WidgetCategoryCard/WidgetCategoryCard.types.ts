import { type Category } from '../../Category/Category.types';
import { type WidgetBase } from '../Widget.types';

export interface WidgetCategoryCard extends WidgetBase {
    name: string;
    description: string;
    categories: Category[];
}
