import { LineItem, Region } from '@medusajs/medusa';

export interface ItemsPreviewTemplateProps {
    items?: Omit<LineItem, 'beforeInsert'>[];
    region?: Region;
}
