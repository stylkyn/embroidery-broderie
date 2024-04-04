export type PriceType = {
    calculated_price: string;
    original_price?: string;
    price_type?: 'sale' | 'default';
    percentage_diff?: string;
};
