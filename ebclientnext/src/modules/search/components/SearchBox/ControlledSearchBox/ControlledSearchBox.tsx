import { FormEvent } from 'react';
import { ControlledSearchBoxProps } from '../../SearchBoxWrapper/SearchBoxWrapper.types';
import { XMarkMini } from '@medusajs/icons';

export const ControlledSearchBox = ({
    inputRef,
    onChange,
    onReset,
    onSubmit,
    placeholder,
    value,
    ...props
}: ControlledSearchBoxProps) => {
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        event.stopPropagation();

        if (onSubmit) {
            onSubmit(event);
        }

        if (inputRef.current) {
            inputRef.current.blur();
        }
    };

    const handleReset = (event: FormEvent) => {
        event.preventDefault();
        event.stopPropagation();

        onReset(event);

        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div {...props} className="w-full">
            <form
                action=""
                noValidate
                onSubmit={handleSubmit}
                onReset={handleReset}
            >
                <div className="flex items-center justify-between">
                    <input
                        ref={inputRef}
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        placeholder={placeholder}
                        spellCheck={false}
                        type="search"
                        value={value}
                        onChange={onChange}
                        className="txt-compact-large h-6 placeholder:text-ui-fg-on-color placeholder:transition-colors focus:outline-none flex-1 bg-transparent "
                    />
                    {value && (
                        <button
                            onClick={handleReset}
                            type="button"
                            className="items-center justify-center text-ui-fg-on-color focus:outline-none gap-x-2 px-2 txt-compact-large flex"
                        >
                            <XMarkMini />
                            Cancel
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};
