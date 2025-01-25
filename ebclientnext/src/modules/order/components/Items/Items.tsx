import { Table } from '@medusajs/ui';

import { ItemsProps } from './Items.types';
import { Divider } from '@modules/common/components/Divider';
import { SkeletonLineItem } from '@modules/skeletons/components/SkeletonLineItem';
import { Item } from '../Item';

export const Items = ({ items, region }: ItemsProps) => {
    return (
        <div className="flex flex-col">
            <Divider className="!mb-0" />
            <Table>
                <Table.Body>
                    {items?.length && region
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
