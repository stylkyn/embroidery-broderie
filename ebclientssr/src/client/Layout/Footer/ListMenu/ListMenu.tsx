import { type FC } from 'react'
import { ListHeader } from '../ListHeader'
import { Link } from '@chakra-ui/react';
import { type ListMenuProps } from './ListMenu.types';
import { buildPagePath } from 'client/Layout/LayoutRoutes/LayoutRoutes.utils';

export const ListMenu: FC<ListMenuProps> = ({ title, pages }) => {
    return (
        <>
            <ListHeader>{title}</ListHeader>
            {
                pages.map((page) => (
                    <Link key={page.id} href={buildPagePath(page)}>{page.name}</Link>
                ))
            }
        </>
    )
}
