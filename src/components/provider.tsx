'use client';

import { RootProvider as Provider } from 'fumadocs-ui/provider/next';
import { ThemeProvider } from 'next-themes';
import type { ReactNode } from 'react';

export function RootProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Provider>{children}</Provider>
    </ThemeProvider>
  );
}
