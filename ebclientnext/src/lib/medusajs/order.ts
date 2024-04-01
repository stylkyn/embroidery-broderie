import { cache } from 'react';

import { medusaClient } from '@lib/config';
import medusaError from '@lib/util/medusa-error';
import { getMedusaHeaders } from './base';

// Order actions
export const retrieveOrder = cache(function (id: string) {
    const headers = getMedusaHeaders(['order']);

    return medusaClient.orders
        .retrieve(id, headers)
        .then(({ order }) => order)
        .catch((err) => medusaError(err));
});
