import projects from "@/consts/projects";
import techs from "@/consts/techs";
import websites from "@/consts/websites";
import type { ProjectLinks } from "@/types/Project";

// Owner của GitHub profile (từ media.ts)
const GITHUB_OWNER = "sawyer-vu";

interface ProjectCardProps {
  id: string;
  t: Record<string, { name: string; description: string }>;
}

function buildLink(link: string, links: ProjectLinks): string {
  const value = links[link as keyof ProjectLinks] ?? "";
  if (link === "figma") return `https://figma.com/community/file/${value}`;
  if (link === "github" && value.startsWith("/"))
    return `https://github.com/${GITHUB_OWNER}${value}`;
  if (link === "live") return `https://${value}`;
  return `https://${websites[link] ?? ""}${value}`;
}

export default function ProjectCard({ id, t }: ProjectCardProps) {
  const project = projects.find((p) => p.id === id);
  if (!project) return null;

  const { hasImage, techs: projectTechs, links } = project;
  const info = t[id];

  return (
    <div className="project">
      {hasImage && (
        <img
          src={`/images/projects/${id}.webp`}
          alt={info?.name ?? id}
          className="project__image"
        />
      )}
      <ul className="project__techs">
        {projectTechs.map((tech) => (
          <li key={tech}>{techs[tech] ?? tech}</li>
        ))}
      </ul>
      <div className="project__content">
        <div className="project__name">{info?.name ?? id}</div>
        <div className="project__description">{info?.description ?? ""}</div>
        <div className="project__links">
          {Object.keys(links).map((link) => {
            const href = buildLink(link, links);
            const label = `${link[0].toUpperCase()}${link.slice(1)}`;
            const isSecondary = link === "cached";
            return (
              <a
                key={link}
                href={href}
                className={`button${isSecondary ? " button__secondary" : ""}`}
                target="_blank"
                rel="noreferrer"
              >
                {label} =&gt;
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
