import { type WidgetCategoryCard } from './WidgetCategoryCard/WidgetCategoryCard.types';
import { type WidgetProductCard } from './WidgetProductCard/WidgetProductCard.types';

export type WidgetType = 'ComponentWidgetsCategoryCards' | 'ComponentWidgetsProductsCards';

export type Widget = WidgetCategoryCard | WidgetProductCard;

export interface WidgetBase {
	__typename: string;
}
