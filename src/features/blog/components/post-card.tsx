import Link from "next/link";
import { routes } from "@/core/config/routes";
import { formatDate } from "@/core/utils/format";
import { Badge } from "@/shared/components/ui/badge";
import type { Post } from "../data/posts";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={routes.post(post.slug)}
      className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-7 transition hover:-translate-y-1 hover:border-accent hover:shadow-lg"
    >
      <div className="mb-4 flex items-center justify-between">
        <Badge>{post.category}</Badge>
        <time dateTime={post.date} className="text-xs text-muted">
          {formatDate(post.date)}
        </time>
      </div>
      <h3 className="font-display font-bold tracking-tight text-xl leading-snug group-hover:text-accent">
        {post.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
      <p className="mt-5 text-xs text-muted">
        {post.author} · {post.readingMinutes} min read
      </p>
    </Link>
  );
}
