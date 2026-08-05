import type { ReactNode } from "react";

import { cn } from "../../lib/cn";

interface SectionHeadingProps {
  kicker: string;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

export function SectionHeading({
  kicker,
  title,
  description,
  action,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className="max-w-2xl">
        <p className="kicker">{kicker}</p>
        <h2 className="mt-3 text-2xl font-bold sm:text-3xl">{title}</h2>
        {description ? (
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
