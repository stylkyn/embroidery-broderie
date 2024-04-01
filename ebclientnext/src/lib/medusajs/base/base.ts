import { cookies } from 'next/headers';

/**
 * Function for getting custom headers for Medusa API requests, including the JWT token and cache revalidation tags.
 *
 * @param tags
 * @returns custom headers for Medusa API requests
 */
export const getMedusaHeaders = (tags: string[] = []) => {
    const headers = {
        next: {
            tags
        }
    } as Record<string, any>;

    const token = cookies().get('_medusa_jwt')?.value;

    if (token) {
        headers.authorization = `Bearer ${token}`;
    }

    return headers;
};
