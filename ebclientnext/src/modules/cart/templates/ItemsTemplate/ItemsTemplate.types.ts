import { LineItem, Region } from '@medusajs/medusa';

export interface ItemsTemplateProps {
    items?: Omit<LineItem, 'beforeInsert'>[];
    region?: Region;
}
