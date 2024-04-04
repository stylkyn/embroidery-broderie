import { Table, Text } from '@medusajs/ui';

import { LineItemOptions } from '@modules/common/components/LineItemOptions';
import { LineItemPrice } from '@modules/common/components/LineItemPrice';
import { LineItemUnitPrice } from '@modules/common/components/LineItemUnitPrice';
import Thumbnail from '@modules/products/components/Thumbnail';
import { ItemProps } from './Item.types';

export const Item = ({ item, region }: ItemProps) => {
    return (
        <Table.Row className="w-full">
            <Table.Cell className="!pl-0 p-4 w-24">
                <div className="flex w-16">
                    <Thumbnail thumbnail={item.thumbnail} size="square" />
                </div>
            </Table.Cell>

            <Table.Cell className="text-left">
                <Text className="txt-medium-plus text-ui-fg-base">
                    {item.title}
                </Text>
                <LineItemOptions variant={item.variant} />
            </Table.Cell>

            <Table.Cell className="!pr-0">
                <span className="!pr-0 flex flex-col items-end h-full justify-center">
                    <span className="flex gap-x-1 ">
                        <Text className="text-ui-fg-muted">
                            {item.quantity}x{' '}
                        </Text>
                        <LineItemUnitPrice
                            item={item}
                            region={region}
                            style="tight"
                        />
                    </span>

                    <LineItemPrice item={item} region={region} style="tight" />
                </span>
            </Table.Cell>
        </Table.Row>
    );
};
