import { LineItem, Region } from '@medusajs/medusa';

export interface ItemProps {
    item: Omit<LineItem, 'beforeInsert'>;
    region: Region;
}
