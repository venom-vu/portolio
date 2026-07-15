import { useEffect } from "react";
import Path from "@/components/Path";
import ProjectList from "@/components/ProjectList";
import { useI18n } from "@/context/I18nContext";
import { startTitleAnimation } from "@/helpers/startTitleAnimation";

export default function Projects() {
  const { locale } = useI18n();

  useEffect(() => {
    startTitleAnimation("projects");
  }, []);

  if (!locale) return null;

  const t = locale.pages.projects;

  return (
    <>
      <Path description={t.description} />
      <ProjectList
        title={t.decent}
        filter={(p) => !p.isSmall}
        t={locale.projects}
      />
      <ProjectList
        title={t.small}
        filter={(p) => (p.isSmall ?? false) && !(p.isInProgress ?? false)}
        t={locale.projects}
      />
    </>
  );
}
