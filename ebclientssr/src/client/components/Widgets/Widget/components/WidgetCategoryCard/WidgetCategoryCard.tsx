import { type FC } from 'react';
import { type WidgetCategoryCard as WidgetCategoryCardType } from 'client/strapi/schemas/Widget/WidgetCategoryCard/WidgetCategoryCard.types';
import { CategoryCard } from 'client/components';
import { CategoryContextProvider } from 'client/contexts';

export const WidgetCategoryCard: FC<{ widget: WidgetCategoryCardType }> = ({ widget }) => {
    console.log(widget);
    return <>{
        widget.categories?.map((category) => (
            <CategoryContextProvider key={category.id} category={category}>
                <CategoryCard />
            </CategoryContextProvider>
        ))
    }</>
}
