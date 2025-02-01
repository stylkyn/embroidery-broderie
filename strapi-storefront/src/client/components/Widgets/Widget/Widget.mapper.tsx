import { type WidgetType } from 'client/strapi/schemas/Widget/Widget.types';
import { type FC } from 'react';
import { WidgetCategoryCard } from './components/WidgetCategoryCard/WidgetCategoryCard';
import { WidgetProductCard } from './components/WidgetProductCard/WidgetProductCard';

// TODO: Vyresit any - mela by tady byt funkce
export const WIDGET_COMPONENT_MAPPER: Record<WidgetType, FC<{ widget: any }>> = {
    ComponentWidgetsCategoryCards: WidgetCategoryCard,
    ComponentWidgetsProductsCards: WidgetProductCard,
} as const;
