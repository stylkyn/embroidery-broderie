import { isPaginationPage, type Pagination } from './pagination.types';

export const paginationToGraphQl = (pagination?: Pagination): string | undefined => {
    if (!pagination) {
        return undefined;
    }

    if (isPaginationPage(pagination)) {
        return `pagination: { page: ${pagination.page}, pageSize: ${pagination.pageSize}}`;
    }

    return `pagination: { start: ${pagination.start}, limit: ${pagination.limit}}`;
}
