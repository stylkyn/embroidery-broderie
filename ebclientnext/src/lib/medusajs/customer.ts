import {
    StorePostCustomersCustomerAddressesAddressReq,
    StorePostCustomersCustomerAddressesReq,
    StorePostCustomersCustomerReq,
    StorePostCustomersReq
} from '@medusajs/medusa';
import { cache } from 'react';

import { medusaClient } from '@lib/config';
import medusaError from '@lib/util/medusa-error';
import { getMedusaHeaders } from './base';

// Customer actions
export function getCustomer() {
    const headers = getMedusaHeaders(['customer']);

    return medusaClient.customers
        .retrieve(headers)
        .then(({ customer }) => customer)
        .catch((err) => null);
}

export function createCustomer(data: StorePostCustomersReq) {
    const headers = getMedusaHeaders(['customer']);

    return medusaClient.customers
        .create(data, headers)
        .then(({ customer }) => customer)
        .catch((err) => medusaError(err));
}

export function updateCustomer(data: StorePostCustomersCustomerReq) {
    const headers = getMedusaHeaders(['customer']);

    return medusaClient.customers
        .update(data, headers)
        .then(({ customer }) => customer)
        .catch((err) => medusaError(err));
}

export function addShippingAddress(
    data: StorePostCustomersCustomerAddressesReq
) {
    const headers = getMedusaHeaders(['customer']);

    return medusaClient.customers.addresses
        .addAddress(data, headers)
        .then(({ customer }) => customer)
        .catch((err) => medusaError(err));
}

export function deleteShippingAddress(addressId: string) {
    const headers = getMedusaHeaders(['customer']);

    return medusaClient.customers.addresses
        .deleteAddress(addressId, headers)
        .then(({ customer }) => customer)
        .catch((err) => medusaError(err));
}

export function updateShippingAddress(
    addressId: string,
    data: StorePostCustomersCustomerAddressesAddressReq
) {
    const headers = getMedusaHeaders(['customer']);

    return medusaClient.customers.addresses
        .updateAddress(addressId, data, headers)
        .then(({ customer }) => customer)
        .catch((err) => medusaError(err));
}

export const listCustomerOrders = cache(function (
    limit: number = 10,
    offset: number = 0
) {
    const headers = getMedusaHeaders(['customer']);

    return medusaClient.customers
        .listOrders({ limit, offset }, headers)
        .then(({ orders }) => orders)
        .catch((err) => medusaError(err));
});
