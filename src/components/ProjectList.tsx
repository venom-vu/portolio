import projects from "@/consts/projects";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/types/Project";

interface ProjectListProps {
  title?: string;
  filter?: (p: Project) => boolean;
  limit?: number;
  t: Record<string, { name: string; description: string }>;
}

export default function ProjectList({
  title,
  filter = () => true,
  limit = projects.length,
  t,
}: ProjectListProps) {
  const filtered = projects
    .filter(filter)
    .slice(0, limit)
    .sort((a, b) => Number(a.hasImage ?? false) - Number(b.hasImage ?? false));

  return (
    <>
      {title && <h2 className="h2">{title}</h2>}
      <div className="project-list">
        {filtered.map(({ id }) => (
          <ProjectCard key={id} id={id} t={t} />
        ))}
      </div>
    </>
  );
}
