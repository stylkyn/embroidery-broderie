'use client';

import { ChangeEvent } from 'react';
import { SortOptions, SortProductsProps } from './SortProducts.types';

import { FilterRadioGroup } from '@modules/common';
import { SORT_OPTIONS } from './SortProducts.consts';

export const SortProducts = ({ sortBy, setQueryParams }: SortProductsProps) => {
    const handleChange = (e: ChangeEvent<HTMLButtonElement>) => {
        const newSortBy = e.target.value as SortOptions;
        setQueryParams('sortBy', newSortBy);
    };

    return (
        <FilterRadioGroup
            title="Sort by"
            items={SORT_OPTIONS}
            value={sortBy}
            handleChange={handleChange}
        />
    );
};
