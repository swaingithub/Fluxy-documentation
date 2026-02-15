'use client';

import { RootProvider as Provider } from 'fumadocs-ui/provider/next';
import SearchDialog from 'fumadocs-ui/components/dialog/search-default';
import { ThemeProvider } from 'next-themes';
import type { ReactNode } from 'react';

export function RootProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Provider
        search={{
          enabled: true,
          SearchDialog: SearchDialog,
          options: {
            delayMs: 400,
          },
        }}
      >
        {children}
      </Provider>
    </ThemeProvider>
  );
}
