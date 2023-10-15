import { type Price } from 'client/strapi';

export const usePrice = (
	price: Price
): { currency: string; currencyChar: string; value: number } => {
	return {
		currency: 'eur',
		value: price.eur,
		currencyChar: '€',
	};
};
