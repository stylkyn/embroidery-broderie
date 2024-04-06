import { useRouter } from 'next/navigation';

import { SearchBoxWrapper } from '../SearchBoxWrapper';
import { ControlledSearchBox } from './ControlledSearchBox';

export const SearchBox = () => {
    const router = useRouter();

    return (
        <SearchBoxWrapper>
            {(props) => {
                return (
                    <>
                        <ControlledSearchBox {...props} />
                    </>
                );
            }}
        </SearchBoxWrapper>
    );
};
