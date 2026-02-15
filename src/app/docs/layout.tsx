import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { source } from '@/lib/source';
import { FluxyLogo } from '@/components/logo';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout 
      tree={source.pageTree} 
      nav={{ 
        title: (
          <div className="flex items-center gap-2 font-bold">
            <FluxyLogo className="size-6" />
            <span className="text-foreground">Fluxy</span>
          </div>
        ),
      }}
      links={[
        {
          text: 'GitHub',
          url: 'https://github.com/swaingithub/fluxy',
          active: 'nested-url',
        },
      ]}
      searchToggle={{
        enabled: true,
      }}
    >
      {children}
    </DocsLayout>
  );
}
