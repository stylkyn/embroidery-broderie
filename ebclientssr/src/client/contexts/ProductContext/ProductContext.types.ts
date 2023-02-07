import { type Product } from '../../strapi/schemas/Product/Product.types';

export interface ProductContext {
    product: Product;
}

export interface ProductContextProviderProps {
    product: Product;
}
