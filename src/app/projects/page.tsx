import type { Metadata } from "next";
import { ProjectGrid } from "@/features/projects/components/project-grid";
import { projects } from "@/features/projects/data/projects";
import { PageHeader, Section } from "@/shared/components/ui/section";

export const metadata: Metadata = {
  title: "Projects",
  description: "A selection of recent client engagements and the results delivered.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title="Products we are proud of."
        description="Lorem ipsum dolor sit amet. A selection of recent engagements across industries."
      />
      <Section>
        <ProjectGrid projects={projects} />
      </Section>
    </>
  );
}
