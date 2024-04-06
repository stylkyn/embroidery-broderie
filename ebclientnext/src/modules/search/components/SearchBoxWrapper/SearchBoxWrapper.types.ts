import { ChangeEvent, FormEvent, RefObject } from 'react';
import { UseSearchBoxProps } from 'react-instantsearch-hooks-web';

export type ControlledSearchBoxProps = React.ComponentProps<'div'> & {
    inputRef: RefObject<HTMLInputElement>;
    onChange(event: ChangeEvent): void;
    onReset(event: FormEvent): void;
    onSubmit?(event: FormEvent): void;
    placeholder?: string;
    value: string;
};

export type SearchBoxProps = {
    children: (state: {
        value: string;
        inputRef: RefObject<HTMLInputElement>;
        onChange: (event: ChangeEvent<HTMLInputElement>) => void;
        onReset: () => void;
        placeholder: string;
    }) => React.ReactNode;
    placeholder?: string;
} & UseSearchBoxProps;
