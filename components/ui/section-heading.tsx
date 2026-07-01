import * as React from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = React.ComponentProps<"div"> & {
  eyebrow: string;
  title: string;
  description?: string;
};

function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)} {...props}>
      <p className="text-brand text-sm font-medium">{eyebrow}</p>
      <h2 className="text-foreground mt-3 text-3xl font-semibold tracking-normal text-balance sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-muted-foreground mt-4 text-base leading-8 text-pretty sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export { SectionHeading };
