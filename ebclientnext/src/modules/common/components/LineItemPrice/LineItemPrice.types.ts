import { LineItem, Region } from '@medusajs/medusa';

export interface LineItemPriceProps {
    item: Omit<LineItem, 'beforeInsert'>;
    region: Region;
    style?: 'default' | 'tight';
}
