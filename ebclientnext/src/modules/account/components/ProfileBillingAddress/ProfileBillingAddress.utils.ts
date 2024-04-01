import { ProfileBillingAddressProps } from './ProfileBillingAddress.types';

// TODO: Asi se nikde nepouziva kdyztak smazat
export const mapBillingAddressToFormData = (
    customer: ProfileBillingAddressProps['customer']
) => {
    return {
        billing_address: {
            first_name: customer.billing_address?.first_name || undefined,
            last_name: customer.billing_address?.last_name || undefined,
            company: customer.billing_address?.company || undefined,
            address_1: customer.billing_address?.address_1 || undefined,
            address_2: customer.billing_address?.address_2 || undefined,
            city: customer.billing_address?.city || undefined,
            province: customer.billing_address?.province || undefined,
            postal_code: customer.billing_address?.postal_code || undefined,
            country_code: customer.billing_address?.country_code || undefined
        }
    };
};
