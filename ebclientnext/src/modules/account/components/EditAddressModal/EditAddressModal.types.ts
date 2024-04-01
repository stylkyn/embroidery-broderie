import { Address, Region } from '@medusajs/medusa';

export interface EditAddressModalProps {
    region: Region;
    address: Address;
    isActive?: boolean;
}
