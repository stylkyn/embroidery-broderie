import { type MenuProps } from 'antd';
import { type Category } from 'client/strapi/schemas/Category.types';

export const categoriesToMenuItems = (categories: Category[]): MenuProps['items'] => (
    (categories ?? []).map((category, index) => (
        {
            key: category.id,
            label: category.name,
            children: category.categories && categoriesToMenuItems(category.categories),
        }
    ))
);
