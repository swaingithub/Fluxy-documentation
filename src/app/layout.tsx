import './globals.css';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { RootProvider } from '@/components/provider';

import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Fluxy - Reactive UI & State Management for Flutter',
  description: 'A modern, lightweight, and powerful reactive framework for Flutter that simplifies state management and UI development.',
  icons: {
    icon: '/icon.svg',
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
