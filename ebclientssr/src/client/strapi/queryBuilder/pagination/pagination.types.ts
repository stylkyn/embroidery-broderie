export type Pagination = PaginationPage | PaginationOffset;

export interface PaginationPage {
    page: number;
    pageSize: number;
}

export interface PaginationOffset {
    start: number;
    limit: number;
}

export const isPaginationPage = (pagination: Pagination): pagination is PaginationPage => {
    return !!(pagination as PaginationPage).page
}
