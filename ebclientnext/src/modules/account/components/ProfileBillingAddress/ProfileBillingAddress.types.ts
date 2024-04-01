'use client';

import { Customer, Region } from '@medusajs/medusa';

export interface ProfileBillingAddressProps {
    customer: Omit<Customer, 'password_hash'>;
    regions: Region[];
}
