import { notFound } from "next/navigation"
import { retrieveOrder } from "@lib/data"
import OrderDetailsTemplate from "@modules/order/templates/order-details-template"
import { Props } from './page.types'

export { generateMetadata } from './page.metadata';

export default async function OrderDetailPage({ params }: Props) {
    const order = await retrieveOrder(params.id).catch(() => null)

    if (!order) {
        notFound()
    }

    return <OrderDetailsTemplate order={order} />
}
