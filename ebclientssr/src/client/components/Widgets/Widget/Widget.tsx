import { type Widget as WidgetTp } from 'client/strapi/schemas/Widget/Widget.types';
import { type FC } from 'react';
import { WIDGET_COMPONENT_MAPPER } from './Widget.mapper';

export const Widget: FC<{ widget: WidgetTp }> = ({ widget }) => {
    console.log(widget);
    const WidgetComponent = WIDGET_COMPONENT_MAPPER[widget.__typename as keyof typeof WIDGET_COMPONENT_MAPPER];
    console.log(WidgetComponent);
	return <WidgetComponent widget={widget} />
};
