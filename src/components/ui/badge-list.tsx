import { cn } from "../../lib/cn";

interface BadgeListProps {
  items: string[];
  className?: string;
  tone?: "default" | "accent";
}

export function BadgeList({
  items,
  className,
  tone = "default",
}: BadgeListProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            "chip",
            tone === "accent" && "border-cobalt/40 text-cobalt-soft",
          )}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
