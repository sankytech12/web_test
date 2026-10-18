import { cn } from "@/core/utils/cn";

export function Badge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-accent-soft px-3 py-1 text-xs font-medium tracking-wide text-accent",
        className,
      )}
      {...props}
    />
  );
}
