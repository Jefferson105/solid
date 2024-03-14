import './globals.css';

import type { Metadata, Viewport } from 'next';
import { Montserrat } from 'next/font/google';

import Footer from '@/components/footer';
import Menu from '@/components/menu';

const montSerrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Solid',
    description: 'Solid Soluções',
    openGraph: {
        siteName: 'Solid'
    }
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body className={montSerrat.className}>
                <Menu />
                {children}
                <Footer />
            </body>
        </html>
    );
}
