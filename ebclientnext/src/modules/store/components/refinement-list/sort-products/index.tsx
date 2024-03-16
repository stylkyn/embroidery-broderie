"use client"

import { ChangeEvent } from "react"
import { SortOptions, SortProductsProps } from './types';

import FilterRadioGroup from "@modules/common/components/filter-radio-group"

const sortOptions = [
    {
        value: "created_at",
        label: "Latest Arrivals",
    },
    {
        value: "price_asc",
        label: "Price: Low -> High",
    },
    {
        value: "price_desc",
        label: "Price: High -> Low",
    },
]

const SortProducts = ({ sortBy, setQueryParams }: SortProductsProps) => {
    const handleChange = (e: ChangeEvent<HTMLButtonElement>) => {
        const newSortBy = e.target.value as SortOptions
        setQueryParams("sortBy", newSortBy)
    }

    return (
        <FilterRadioGroup
            title="Sort by"
            items={sortOptions}
            value={sortBy}
            handleChange={handleChange}
        />
    )
}

export default SortProducts
