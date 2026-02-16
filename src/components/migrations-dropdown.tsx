'use client';

import * as React from 'react';
import { ChevronDown, History } from 'lucide-react';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const migrations = [
  { version: 'v0.1.8', href: '/docs/migration/migration-0-1-8', description: 'Latest stable - Fluxy State System' },
  { version: 'v0.1.7', href: '/docs/migration/migration-0-1-7', description: 'Previous stable' },
  { version: 'v0.1.6', href: '/docs/migration/migration-0-1-6', description: 'Stability release' },
  { href: '/docs/migration/#', description: 'Migration Guides' },
];

export function MigrationsDropdown() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  
  const currentMigration = migrations.find(m => m.href === pathname);
  
  // Close when pathname changes
  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="relative px-2 py-4 border-b border-border/50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center justify-between w-full px-3 py-2 text-sm font-medium transition-colors rounded-lg bg-secondary/50 hover:bg-secondary text-secondary-foreground border border-border/50",
          isOpen && "ring-2 ring-primary/20 border-primary/50"
        )}
      >
        <div className="flex items-center gap-2 text-left">
          <History className="size-4 text-primary" />
          <div className="flex flex-col">
            <span className="font-semibold leading-tight">
              {currentMigration ? currentMigration.version : 'Migrations'}
            </span>
            <span className="text-[10px] text-muted-foreground leading-tight">
              {currentMigration ? 'Viewing guide' : 'Version guides'}
            </span>
          </div>
        </div>
        <ChevronDown 
          className={cn(
            "size-4 text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-180"
          )} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div 
              className="fixed inset-0 z-40 bg-transparent" 
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 4, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="absolute left-2 right-2 z-50 overflow-hidden border rounded-xl bg-popover text-popover-foreground shadow-xl ring-1 ring-black/5"
            >
              <div className="p-1">
                {migrations.map((m) => (
                  <Link
                    key={m.version || m.description}
                    href={m.href || '#'}
                    className={cn(
                      "flex flex-col gap-0.5 px-3 py-2 text-sm transition-all rounded-md hover:bg-accent hover:text-accent-foreground",
                      pathname === m.href ? "bg-primary/10 text-primary font-medium border-l-2 border-primary rounded-l-none" : "text-muted-foreground"
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <span className={cn(pathname === m.href ? "text-primary" : "text-foreground")}>
                        {m.version} Migration
                      </span>
                      {pathname === m.href && (
                        <div className="size-1.5 rounded-full bg-primary" />
                      )}
                    </div>
                    <span className="text-[10px] opacity-70">
                      {m.description}
                    </span>
                  </Link>
                ))}
              </div>
              <div className="p-2 border-t bg-muted/30">
                <p className="text-[9px] text-center text-muted-foreground font-medium uppercase tracking-wider">
                  Select a version to view migration guide
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
