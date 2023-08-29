import { useWidgetPageStore } from 'client/stores/WidgetPageStore/WidgetPageStore';
import { type FC } from 'react';
import { Widget } from './Widget/Widget';

export const WidgetsSwitch: FC = () => {
    const { widgetPage, loading } = useWidgetPageStore();

    if (loading || !widgetPage) {
        return null;
    }

    const { widgets } = widgetPage;

	return <>
    {
        widgets?.map((widget, index) => {
           return <Widget key={index} widget={widget} />
        })
    }
    </>
};
