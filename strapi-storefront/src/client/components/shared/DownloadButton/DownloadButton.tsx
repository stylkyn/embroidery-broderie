import { Button } from '@chakra-ui/react';
import { getFilePath } from 'client/utils/filePath';
import { type FC } from 'react';
import { MdFileDownload } from 'react-icons/md';
import { type DownloadButtonProps } from './DownloadButton.types';

export const DownloadButton: FC<DownloadButtonProps> = ({ url }) => (
	<Button
		leftIcon={<MdFileDownload />}
		colorScheme="pink"
		variant="outline"
		w="half"
	>
		<a href={getFilePath(url)} target="_blank" download rel="noreferrer">
			Download csv
		</a>
	</Button>
);
