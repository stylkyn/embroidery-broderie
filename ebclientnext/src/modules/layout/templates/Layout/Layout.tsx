import React from 'react';

import { Footer, Nav } from '@modules/layout';
import { LayoutProps } from './Layout.types';

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <Nav />
            <main className="relative">{children}</main>
            <Footer />
        </div>
    );
};
