export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  readingMinutes: number;
  author: string;
  body: string[];
};

const filler = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
];

export const posts: Post[] = [
  { slug: "shipping-llm-apps-to-production", title: "Shipping LLM apps to production: what actually matters", excerpt: "Evaluation, guardrails and cost control: the unglamorous parts that decide success.", category: "AI", date: "2026-08-12", readingMinutes: 7, author: "Priya Raman", body: filler },
  { slug: "flutter-vs-native", title: "Flutter, React Native or native? A decision framework", excerpt: "How to pick a mobile stack based on product, team and long-term cost.", category: "Mobile", date: "2026-07-03", readingMinutes: 6, author: "Daniel Okafor", body: filler },
  { slug: "cloud-cost-playbook", title: "A practical playbook for cutting cloud spend", excerpt: "Ten FinOps moves that save money without slowing teams down.", category: "Cloud", date: "2026-05-21", readingMinutes: 8, author: "Meera Shah", body: filler },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
