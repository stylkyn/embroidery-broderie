import { cache } from 'react';

import { medusaClient } from '@lib/config';
import { getMedusaHeaders } from './base';

// Shipping actions
export const listShippingMethods = cache(function listShippingMethods(
    regionId: string,
    productIds?: string[]
) {
    const headers = getMedusaHeaders(['shipping']);

    const product_ids = productIds?.join(',');

    return medusaClient.shippingOptions
        .list(
            {
                region_id: regionId,
                product_ids
            },
            headers
        )
        .then(({ shipping_options }) => shipping_options)
        .catch((err) => {
            // eslint-disable-next-line no-console
            console.error(err);

            return null;
        });
});
