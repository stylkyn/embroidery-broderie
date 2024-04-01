import { StorePostAuthReq } from '@medusajs/medusa';
import { cache } from 'react';

import { medusaClient } from '@lib/config';
import medusaError from '@lib/util/medusa-error';
import { cookies } from 'next/headers';
import { getMedusaHeaders } from './base';

// Authentication actions
export function getToken(credentials: StorePostAuthReq) {
    return medusaClient.auth
        .getToken(credentials, {
            next: {
                tags: ['auth']
            }
        })
        .then(({ access_token }) => {
            access_token &&
                cookies().set('_medusa_jwt', access_token, {
                    maxAge: 60 * 60 * 24 * 7,
                    httpOnly: true,
                    sameSite: 'strict',
                    secure: process.env.NODE_ENV === 'production'
                });

            return access_token;
        })
        .catch((err) => {
            throw new Error('Wrong email or password.');
        });
}

export function authenticate(credentials: StorePostAuthReq) {
    const headers = getMedusaHeaders(['auth']);

    return medusaClient.auth
        .authenticate(credentials, headers)
        .then(({ customer }) => customer)
        .catch((err) => medusaError(err));
}

export const getSession = cache(function getSession() {
    const headers = getMedusaHeaders(['auth']);

    return medusaClient.auth
        .getSession(headers)
        .then(({ customer }) => customer)
        .catch((err) => medusaError(err));
});
