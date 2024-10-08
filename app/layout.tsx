"use client";

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '6amMart Clone',
  description: 'A clone of 6amMart using Next.js and shadcn/ui',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <I18nextProvider i18n={i18n}>
            <Header />
            <main>{children}</main>
            <Footer />
          </I18nextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}