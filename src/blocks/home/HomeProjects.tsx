import { Link } from "react-router-dom";
import ProjectList from "@/components/ProjectList";

interface HomeProjectsProps {
  t: { title: string; button: string };
  tProjects: Record<string, { name: string; description: string }>;
}

export default function HomeProjects({ t, tProjects }: HomeProjectsProps) {
  return (
    <section className="projects">
      <div className="projects__header">
        <h2 className="h2">{t.title}</h2>
        <Link to="/projects" className="projects__link">
          {t.button} ~~&gt;
        </Link>
      </div>
      <ProjectList limit={3} t={tProjects} />
    </section>
  );
}
