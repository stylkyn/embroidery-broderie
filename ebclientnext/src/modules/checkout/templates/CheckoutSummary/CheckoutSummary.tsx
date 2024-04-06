import { Heading } from '@medusajs/ui';

import { ItemsPreviewTemplate } from '@modules/cart';
import { DiscountCode } from '@modules/checkout';
import { CartTotals, Divider } from '@modules/common';
import { cookies } from 'next/headers';
import { getCart } from '@lib/medusajs';

export const CheckoutSummary = async () => {
    const cartId = cookies().get('_medusa_cart_id')?.value;

    if (!cartId) {
        return null;
    }

    const cart = await getCart(cartId).then((cart) => cart);

    if (!cart) {
        return null;
    }

    return (
        <div className="sticky top-0 flex flex-col-reverse small:flex-col gap-y-8 py-8 small:py-0 ">
            <div className="w-full bg-white flex flex-col">
                <Divider className="my-6 small:hidden" />
                <Heading
                    level="h2"
                    className="flex flex-row text-3xl-regular items-baseline"
                >
                    In your Cart
                </Heading>
                <Divider className="my-6" />
                <CartTotals data={cart} />
                <ItemsPreviewTemplate
                    region={cart?.region}
                    items={cart?.items}
                />
                <div className="my-6">
                    <DiscountCode cart={cart} />
                </div>
            </div>
        </div>
    );
};
