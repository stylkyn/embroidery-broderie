import { StorePostCartsCartReq } from '@medusajs/medusa';
import { cache } from 'react';

import { medusaClient } from '@lib/config';
import medusaError from '@lib/util/medusa-error';
import { getMedusaHeaders } from './base';

// Cart actions
export function createCart(data = {}) {
    const headers = getMedusaHeaders(['cart']);

    return medusaClient.carts
        .create(data, headers)
        .then(({ cart }) => cart)
        .catch((err) => {
            // eslint-disable-next-line no-console
            console.error(err);

            return null;
        });
}

export function updateCart(cartId: string, data: StorePostCartsCartReq) {
    const headers = getMedusaHeaders(['cart']);

    return medusaClient.carts
        .update(cartId, data, headers)
        .then(({ cart }) => cart)
        .catch((error) => medusaError(error));
}

export const getCart = cache(function (cartId: string) {
    const headers = getMedusaHeaders(['cart']);

    return medusaClient.carts
        .retrieve(cartId, headers)
        .then(({ cart }) => cart)
        .catch((err) => {
            // eslint-disable-next-line no-console
            console.error(err);

            return null;
        });
});

export function addItem({
    cartId,
    variantId,
    quantity
}: {
    cartId: string;
    variantId: string;
    quantity: number;
}) {
    const headers = getMedusaHeaders(['cart']);

    return medusaClient.carts.lineItems
        .create(cartId, { variant_id: variantId, quantity }, headers)
        .then(({ cart }) => cart)
        .catch((err) => {
            // eslint-disable-next-line no-console
            console.error(err);

            return null;
        });
}

export function updateItem({
    cartId,
    lineId,
    quantity
}: {
    cartId: string;
    lineId: string;
    quantity: number;
}) {
    const headers = getMedusaHeaders(['cart']);

    return medusaClient.carts.lineItems
        .update(cartId, lineId, { quantity }, headers)
        .then(({ cart }) => cart)
        .catch((err) => medusaError(err));
}

export function removeItem({
    cartId,
    lineId
}: {
    cartId: string;
    lineId: string;
}) {
    const headers = getMedusaHeaders(['cart']);

    return medusaClient.carts.lineItems
        .delete(cartId, lineId, headers)
        .then(({ cart }) => cart)
        .catch((err) => {
            // eslint-disable-next-line no-console
            console.error(err);

            return null;
        });
}

export function deleteDiscount(cartId: string, code: string) {
    const headers = getMedusaHeaders(['cart']);

    return medusaClient.carts
        .deleteDiscount(cartId, code, headers)
        .then(({ cart }) => cart)
        .catch((err) => {
            // eslint-disable-next-line no-console
            console.error(err);

            return null;
        });
}

export function createPaymentSessions(cartId: string) {
    const headers = getMedusaHeaders(['cart']);

    return medusaClient.carts
        .createPaymentSessions(cartId, headers)
        .then(({ cart }) => cart)
        .catch((err) => {
            // eslint-disable-next-line no-console
            console.error(err);

            return null;
        });
}

export function setPaymentSession({
    cartId,
    providerId
}: {
    cartId: string;
    providerId: string;
}) {
    const headers = getMedusaHeaders(['cart']);

    return medusaClient.carts
        .setPaymentSession(cartId, { provider_id: providerId }, headers)
        .then(({ cart }) => cart)
        .catch((err) => medusaError(err));
}

export function completeCart(cartId: string) {
    const headers = getMedusaHeaders(['cart']);

    return medusaClient.carts
        .complete(cartId, headers)
        .then((res) => res)
        .catch((err) => medusaError(err));
}

export function addShippingMethod({
    cartId,
    shippingMethodId
}: {
    cartId: string;
    shippingMethodId: string;
}) {
    const headers = getMedusaHeaders(['cart']);

    return medusaClient.carts
        .addShippingMethod(cartId, { option_id: shippingMethodId }, headers)
        .then(({ cart }) => cart)
        .catch((err) => medusaError(err));
}
