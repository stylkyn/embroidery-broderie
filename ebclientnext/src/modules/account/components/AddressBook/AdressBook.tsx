import { AddAddressModal } from '../AddAddressModal/AddAddressModal';
import { EditAddressModal } from '../EditAddressModal';
import { AddressBookProps } from './AddressBook.types';

export const AddressBook: React.FC<AddressBookProps> = ({
    customer,
    region
}) => {
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-1 mt-4">
                <AddAddressModal region={region} />
                {customer.shipping_addresses.map((address) => {
                    return (
                        <EditAddressModal
                            region={region}
                            address={address}
                            key={address.id}
                        />
                    );
                })}
            </div>
        </div>
    );
};
