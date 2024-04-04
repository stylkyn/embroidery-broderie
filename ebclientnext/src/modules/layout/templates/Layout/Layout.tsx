import React from 'react';

import { Footer } from '@modules/layout/templates/Footer';
import { Nav } from '@modules/layout/templates/Nav';
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
