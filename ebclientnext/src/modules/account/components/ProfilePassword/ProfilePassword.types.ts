import { Customer } from '@medusajs/medusa';

export interface ProfilePasswordProps {
    // TODO: Prijde mi divne, ze je tady omit password hashe
    customer: Omit<Customer, 'password_hash'>;
}
