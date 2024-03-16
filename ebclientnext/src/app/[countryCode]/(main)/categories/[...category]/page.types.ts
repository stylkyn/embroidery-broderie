import { SortOptions } from '@modules/store/components/refinement-list/sort-products/types'

export type Props = {
	params: { category: string[]; countryCode: string }
	searchParams: {
		sortBy?: SortOptions
		page?: string
	}
}
