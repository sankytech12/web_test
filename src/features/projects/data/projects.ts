export type ProjectCategory = "AI" | "Web" | "Mobile" | "Cloud" | "Enterprise";

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: ProjectCategory;
  year: number;
  summary: string;
  challenge: string;
  solution: string;
  stack: string[];
  results: { label: string; value: string }[];
  /** Tailwind gradient classes used as a placeholder cover. */
  cover: string;
};

export const projectCategories: ProjectCategory[] = ["AI", "Web", "Mobile", "Cloud", "Enterprise"];

export const projects: Project[] = [
  {
    slug: "support-copilot",
    title: "AI Support Copilot",
    client: "Northwind Retail",
    category: "AI",
    year: 2026,
    summary: "An LLM assistant that resolves 60% of tickets automatically.",
    challenge: "Lorem ipsum dolor sit amet. Support volume was growing faster than headcount and response times were slipping.",
    solution: "Sed do eiusmod tempor. We built a retrieval-augmented agent connected to the knowledge base and ticketing system, with human hand-off and full audit trail.",
    stack: ["Python", "OpenAI", "pgvector", "Next.js", "AWS"],
    results: [{ label: "Tickets auto-resolved", value: "60%" }, { label: "First response", value: "-82%" }, { label: "CSAT", value: "+14 pts" }],
    cover: "from-emerald-500 to-teal-900",
  },
  {
    slug: "logistics-control-tower",
    title: "Logistics Control Tower",
    client: "Atlas Logistics",
    category: "Web",
    year: 2025,
    summary: "Real-time fleet visibility for 12,000 shipments a day.",
    challenge: "Ut enim ad minim veniam. Operations teams juggled five tools to track shipments and exceptions.",
    solution: "Duis aute irure dolor. A single web platform with live maps, alerting and partner APIs.",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Kafka"],
    results: [{ label: "Shipments / day", value: "12k" }, { label: "Delays caught early", value: "+47%" }, { label: "Tools replaced", value: "5" }],
    cover: "from-sky-600 to-indigo-900",
  },
  {
    slug: "patient-care-app",
    title: "Patient Care App",
    client: "Meridian Health",
    category: "Mobile",
    year: 2025,
    summary: "iOS and Android app serving 200k patients.",
    challenge: "Excepteur sint occaecat. Patients relied on phone calls for scheduling and results.",
    solution: "Nemo enim ipsam voluptatem. A secure cross-platform app with biometric login, scheduling and telehealth.",
    stack: ["Flutter", "Dart", "Firebase", "FHIR", "GCP"],
    results: [{ label: "Active users", value: "200k" }, { label: "Call volume", value: "-45%" }, { label: "Store rating", value: "4.8" }],
    cover: "from-cyan-500 to-blue-900",
  },
  {
    slug: "cloud-migration",
    title: "Cloud Migration & FinOps",
    client: "Helix Holdings",
    category: "Cloud",
    year: 2025,
    summary: "140 workloads moved to the cloud with 31% lower spend.",
    challenge: "Neque porro quisquam est. Aging data centres, rising costs and no disaster recovery.",
    solution: "Quis autem vel eum iure. Landing zone, IaC, phased migration waves and cost governance.",
    stack: ["Azure", "Terraform", "Kubernetes", "GitHub Actions", "Grafana"],
    results: [{ label: "Workloads migrated", value: "140" }, { label: "Cloud spend", value: "-31%" }, { label: "Uptime", value: "99.99%" }],
    cover: "from-violet-600 to-purple-950",
  },
  {
    slug: "erp-modernisation",
    title: "ERP Modernisation",
    client: "Summit Manufacturing",
    category: "Enterprise",
    year: 2024,
    summary: "Legacy ERP replaced by modular services and APIs.",
    challenge: "At vero eos et accusamus. A 20-year-old monolith blocked every change request.",
    solution: "Et harum quidem rerum. Strangler-pattern migration to microservices with a unified API layer.",
    stack: ["Java", "Spring Boot", "React", "Oracle", "Azure"],
    results: [{ label: "Release cadence", value: "Weekly" }, { label: "Lead time", value: "-60%" }, { label: "Plants live", value: "6" }],
    cover: "from-slate-600 to-slate-900",
  },
  {
    slug: "demand-forecasting",
    title: "Demand Forecasting Engine",
    client: "Orbit Media",
    category: "AI",
    year: 2024,
    summary: "ML forecasts that cut waste and stock-outs.",
    challenge: "Temporibus autem quibusdam. Planning relied on spreadsheets and gut feel.",
    solution: "Itaque earum rerum hic. Gradient-boosted and deep models with an MLOps pipeline and planner dashboards.",
    stack: ["Python", "PyTorch", "Airflow", "Snowflake", "Power BI"],
    results: [{ label: "Forecast accuracy", value: "+23%" }, { label: "Stock-outs", value: "-38%" }, { label: "Waste", value: "-19%" }],
    cover: "from-lime-500 to-green-900",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
