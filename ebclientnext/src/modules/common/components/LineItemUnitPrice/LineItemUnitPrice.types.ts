import { LineItem, Region } from '@medusajs/medusa';

export interface LineItemUnitPriceProps {
    item: Omit<LineItem, 'beforeInsert'>;
    region: Region;
    style?: 'default' | 'tight';
}
