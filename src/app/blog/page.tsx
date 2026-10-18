import type { Metadata } from "next";
import { PostCard } from "@/features/blog/components/post-card";
import { posts } from "@/features/blog/data/posts";
import { PageHeader, Section } from "@/shared/components/ui/section";

export const metadata: Metadata = {
  title: "Insights",
  description: "Engineering articles from the Shah & Shah team.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Engineering insights."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </Section>
    </>
  );
}
