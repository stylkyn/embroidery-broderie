import { type MenuProps } from 'antd';
import { type Category } from 'client/strapi/schemas/Category.types';

export const categoriesToMenuItems = (categories: Category[]): MenuProps['items'] => (
    (categories ?? []).map((category, index) => (
        {
            key: category.id,
            label: category.name,
            // children: new Array(4).fill(null).map((_, j) => {
            //     const subKey = index * 4 + j + 1;

            //     return {
            //         key: subKey,
            //         label: `option${subKey}`,
            //     };
            // }),
        }
    ))
);
