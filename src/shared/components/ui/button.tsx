import Link from "next/link";
import { cn } from "@/core/utils/cn";

const variants = {
  primary:
    "bg-cta text-cta-foreground shadow-lg shadow-cta/30 hover:-translate-y-0.5 hover:brightness-110",
  accent: "bg-cta text-cta-foreground shadow-lg shadow-cta/30 hover:-translate-y-0.5 hover:brightness-110",
  dark: "bg-brand text-brand-foreground hover:opacity-90 shadow-sm",
  onDark: "border border-white/40 text-white hover:bg-white/10",
  outline:
    "border border-border bg-surface text-foreground hover:border-accent hover:text-accent",
  ghost: "text-foreground hover:bg-accent-soft",
} as const;

const sizes = {
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-7 text-base",
} as const;

type Props = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  children: React.ReactNode;
};

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50";

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: Props & Omit<React.ComponentProps<"button">, keyof Props>) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  ...props
}: Props & Omit<React.ComponentProps<typeof Link>, keyof Props>) {
  return (
    <Link
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
