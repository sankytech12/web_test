import Link from "next/link";
import { siteConfig } from "@/core/config/site";

export function Logo() {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      className="flex items-center gap-2.5 whitespace-nowrap"
    >
      <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-violet to-spark text-lg font-bold text-white">
        S
      </span>
      <span className="font-display font-bold tracking-tight text-xl tracking-tight">
        Shah <span className="text-accent">&amp;</span> Shah
      </span>
    </Link>
  );
}
