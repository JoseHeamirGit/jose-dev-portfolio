import * as React from "react";

import { SiteHeader } from "@/components/layout/site-header";

function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-page-radial flex min-h-screen flex-col overflow-hidden">
      <a
        href="#main"
        className="bg-brand text-brand-foreground sr-only z-[60] rounded-md px-4 py-2 text-sm font-medium focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
    </div>
  );
}

export { SiteShell };
