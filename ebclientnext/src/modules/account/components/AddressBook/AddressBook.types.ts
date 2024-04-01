import { Customer, Region } from '@medusajs/medusa';

export interface AddressBookProps {
    customer: Omit<Customer, 'password_hash'>;
    region: Region;
}
