import { type Product } from '../../Product/Product.types';
import { type WidgetBase } from '../Widget.types';

export interface WidgetProductCard extends WidgetBase {
    name: string;
    description: string;
    products: Product[];
}
