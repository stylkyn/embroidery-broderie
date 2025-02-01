import { AddCardButton, DownloadButton } from 'client/components/shared';
import { useProduct } from 'client/contexts';
import { usePrice } from 'client/hooks';
import { type FC } from 'react';

export const ProductButton: FC = () => {
	const { product } = useProduct();
	const { isFree } = usePrice(product.price);

	return isFree ? (
		<DownloadButton url={product.files[0].url} />
	) : (
		<AddCardButton />
	);
};
