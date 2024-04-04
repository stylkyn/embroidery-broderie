import { Metadata } from 'next';

import Footer from '@modules/layout/templates/Footer';
import Nav from '@modules/layout/templates/Nav';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://localhost:8000';

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL)
};

export default function PageLayout(props: { children: React.ReactNode }) {
    return (
        <>
            <Nav />
            {props.children}
            <Footer />
        </>
    );
}
