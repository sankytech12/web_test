import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { routes } from "@/core/config/routes";
import { formatDate } from "@/core/utils/format";
import { getPost, posts } from "@/features/blog/data/posts";
import { Badge } from "@/shared/components/ui/badge";
import { Container } from "@/shared/components/ui/container";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const post = getPost((await params).slug);
  return post ? { title: post.title, description: post.excerpt } : {};
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  return (
    <article>
      <Container className="max-w-3xl py-20 sm:py-28">
        <Link
          href={routes.blog}
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted hover:text-accent"
        >
          <ArrowLeft className="size-4" /> All insights
        </Link>
        <Badge>{post.category}</Badge>
        <h1 className="mt-4 font-display font-bold tracking-tight text-4xl leading-tight sm:text-5xl">{post.title}</h1>
        <p className="mt-4 text-sm text-muted">
          {post.author} ·{" "}
          <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingMinutes} min read
        </p>
        <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted">
          {post.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </Container>
    </article>
  );
}
