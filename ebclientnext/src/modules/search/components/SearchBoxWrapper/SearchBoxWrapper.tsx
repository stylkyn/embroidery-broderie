import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useSearchBox } from 'react-instantsearch-hooks-web';
import { SearchBoxProps } from './SearchBoxWrapper.types';

export const SearchBoxWrapper = ({
    children,
    placeholder = 'Search products...',
    ...rest
}: SearchBoxProps) => {
    const { query, refine } = useSearchBox(rest);
    const [value, setValue] = useState(query);
    const inputRef = useRef<HTMLInputElement>(null);

    const router = useRouter();

    const onReset = () => {
        setValue('');
    };

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);
    };

    const onSubmit = () => {
        if (value) {
            router.push(`/results/${value}`);
        }
    };

    useEffect(() => {
        if (query !== value) {
            refine(value);
        }
        // We don't want to track when the InstantSearch query changes.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    useEffect(() => {
        // We bypass the state update if the input is focused to avoid concurrent
        // updates when typing.
        if (document.activeElement !== inputRef.current && query !== value) {
            setValue(query);
        }
        // We don't want to track when the React state value changes.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const state = {
        value,
        inputRef,
        onChange,
        onSubmit,
        onReset,
        placeholder
    };

    return children(state) as React.ReactElement;
};
