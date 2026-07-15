import { useEffect } from "react";
import Path from "@/components/Path";
import AboutSection from "@/blocks/about/AboutSection";
import AboutSkills from "@/blocks/about/AboutSkills";
import Facts from "@/blocks/about/Facts";
import { useI18n } from "@/context/I18nContext";
import { startTitleAnimation } from "@/helpers/startTitleAnimation";

export default function About() {
  const { locale } = useI18n();

  useEffect(() => {
    startTitleAnimation("about-me");
  }, []);

  if (!locale) return null;

  const t = locale.pages.about;

  return (
    <>
      <Path description={t.description} />
      <AboutSection t={t.about} />
      <AboutSkills t={t.skills} tSkills={locale.skills} />
      <Facts t={t.facts} />
    </>
  );
}
