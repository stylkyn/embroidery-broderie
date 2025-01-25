import React from 'react';

import { LayoutProps } from './Layout.types';
import { Nav } from '../Nav';
import { Footer } from '../Footer';

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <Nav />
            <main className="relative">{children}</main>
            <Footer />
        </div>
    );
};
