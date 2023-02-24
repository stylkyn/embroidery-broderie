import { AutoComplete, Input } from 'antd';
import { type FC } from 'react';

export const Search: FC = () => {
	return (
		<AutoComplete options={[]}>
			<Input.Search size="large" placeholder="Find you favourite product" />
		</AutoComplete>
	);
};
