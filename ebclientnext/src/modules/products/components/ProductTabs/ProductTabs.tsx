'use client';

import { ProductTabsProps } from './ProductTabs.types';
import { ProductInfoTab, ShippingInfoTab } from './ProductTabs.components';
import { Accordion } from './Accordion';

export const ProductTabs = ({ product }: ProductTabsProps) => {
    const tabs = [
        {
            label: 'Product Information',
            component: <ProductInfoTab product={product} />
        },
        {
            label: 'Shipping & Returns',
            component: <ShippingInfoTab />
        }
    ];

    return (
        <div className="w-full">
            <Accordion type="multiple">
                {tabs.map((tab, i) => (
                    <Accordion.Item
                        key={i}
                        title={tab.label}
                        headingSize="medium"
                        value={tab.label}
                    >
                        {tab.component}
                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    );
};
