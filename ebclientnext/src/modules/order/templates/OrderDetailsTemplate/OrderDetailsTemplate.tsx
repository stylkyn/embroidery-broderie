'use client';

import { XMark } from '@medusajs/icons';
import React from 'react';

import {
    Help,
    Items,
    OrderDetails,
    OrderSummary,
    ShippingDetails
} from '@modules/order/components';
import { LocalizedClientLink } from '@modules/common/components';
import { OrderDetailsTemplateProps } from './OrderDetailsTemplate.types';

export const OrderDetailsTemplate: React.FC<OrderDetailsTemplateProps> = ({
    order
}) => {
    return (
        <div className="flex flex-col justify-center gap-y-4">
            <div className="flex gap-2 justify-between items-center">
                <h1 className="text-2xl-semi">Order details</h1>
                <LocalizedClientLink
                    href="/account/orders"
                    className="flex gap-2 items-center text-ui-fg-subtle hover:text-ui-fg-base"
                >
                    <XMark /> Back to overview
                </LocalizedClientLink>
            </div>
            <div className="flex flex-col gap-4 h-full bg-white w-full">
                <OrderDetails order={order} showStatus />
                <Items items={order.items} region={order.region} />
                <ShippingDetails order={order} />
                <OrderSummary order={order} />
                <Help />
            </div>
        </div>
    );
};
