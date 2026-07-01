import * as React from "react";

import { cn } from "@/lib/utils";

function PortfolioCard({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "group bg-surface/70 hover:border-brand/40 hover:bg-surface-raised/80 hover:shadow-brand/5 relative overflow-hidden rounded-2xl border border-white/10 p-6 shadow-xl shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-1",
        className,
      )}
      {...props}
    />
  );
}

function PortfolioCardIcon({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "text-brand bg-brand-muted mb-5 grid size-11 place-items-center rounded-xl border border-white/10 shadow-inner shadow-white/5",
        className,
      )}
      {...props}
    />
  );
}

export { PortfolioCard, PortfolioCardIcon };
