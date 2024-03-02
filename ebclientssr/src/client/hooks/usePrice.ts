import { type Price } from 'client/strapi';

export const usePrice = (
	price: Price
): {
	currency: string;
	currencyChar: string;
	value: number | string;
	isFree: boolean;
} => {
	const isFree = price.eur === 0;
	if (isFree) {
		return {
			currency: '',
			value: 'free',
			currencyChar: '',
			isFree,
		};
	}

	return {
		currency: 'eur',
		value: price.eur,
		currencyChar: '€',
		isFree,
	};
};
