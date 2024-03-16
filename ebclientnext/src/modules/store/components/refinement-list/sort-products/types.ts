export type SortOptions = 'price_asc' | 'price_desc' | 'created_at'
export type SortProductsProps = {
	sortBy: SortOptions
	setQueryParams: (name: string, value: SortOptions) => void
}
