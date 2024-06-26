'use client';

import { Table, clx } from '@medusajs/ui';

import { Item } from '@modules/cart';
import { SkeletonLineItem } from '@modules/skeletons';
import { ItemsPreviewTemplateProps } from './ItemsPreviewTemplate.types';

export const ItemsPreviewTemplate = ({
    items,
    region
}: ItemsPreviewTemplateProps) => {
    const hasOverflow = items && items.length > 4;

    return (
        <div
            className={clx({
                'pl-[1px] overflow-y-scroll overflow-x-hidden no-scrollbar max-h-[420px]':
                    hasOverflow
            })}
        >
            <Table>
                <Table.Body>
                    {items && region
                        ? items
                              .sort((a, b) => {
                                  return a.created_at > b.created_at ? -1 : 1;
                              })
                              .map((item) => {
                                  return (
                                      <Item
                                          key={item.id}
                                          item={item}
                                          region={region}
                                          type="preview"
                                      />
                                  );
                              })
                        : Array.from(Array(5).keys()).map((i) => {
                              return <SkeletonLineItem key={i} />;
                          })}
                </Table.Body>
            </Table>
        </div>
    );
};
