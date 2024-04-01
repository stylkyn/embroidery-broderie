import { getCustomer } from '@lib/medusajs';
import { AccountLayout } from '@modules/account';

export default async function AccountPageLayout({
    dashboard,
    login
}: {
    dashboard?: React.ReactNode;
    login?: React.ReactNode;
}) {
    const customer = await getCustomer().catch(() => null);

    return (
        <AccountLayout customer={customer}>
            {customer ? dashboard : login}
        </AccountLayout>
    );
}
