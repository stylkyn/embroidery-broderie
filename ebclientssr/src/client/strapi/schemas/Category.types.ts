export interface Category {
    id: string;
    name: string;
    description: string;
    categories: Category;
}
