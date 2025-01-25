import { forwardRef, useImperativeHandle, useMemo, useRef } from 'react';

import { CountrySelectProps } from './CountrySelect.types';
import { NativeSelect } from '@modules/common/components/NativeSelect';

export const CountrySelect = forwardRef<HTMLSelectElement, CountrySelectProps>(
    ({ placeholder = 'Country', region, defaultValue, ...props }, ref) => {
        const innerRef = useRef<HTMLSelectElement>(null);

        useImperativeHandle<HTMLSelectElement | null, HTMLSelectElement | null>(
            ref,
            () => innerRef.current
        );

        const countryOptions = useMemo(() => {
            if (!region) {
                return [];
            }

            return region.countries.map((country) => ({
                value: country.iso_2,
                label: country.display_name
            }));
        }, [region]);

        return (
            <NativeSelect
                ref={innerRef}
                placeholder={placeholder}
                defaultValue={defaultValue}
                {...props}
            >
                {countryOptions.map(({ value, label }, index) => (
                    <option key={index} value={value}>
                        {label}
                    </option>
                ))}
            </NativeSelect>
        );
    }
);

CountrySelect.displayName = 'CountrySelect';
