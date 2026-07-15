import { useEffect } from "react";
import Hero from "@/blocks/home/Hero";
import Quote from "@/blocks/home/Quote";
import HomeSkills from "@/blocks/home/HomeSkills";
import HomeAbout from "@/blocks/home/HomeAbout";
import HomeContacts from "@/blocks/home/HomeContacts";
import { useI18n } from "@/context/I18nContext";
import { startTitleAnimation } from "@/helpers/startTitleAnimation";

export default function Home() {
  const { locale } = useI18n();

  useEffect(() => {
    startTitleAnimation("home");
  }, []);

  if (!locale) return null;

  const t = locale.pages.home;

  return (
    <>
      <Hero t={t.hero} />
      <Quote t={t.quote} />
      {/* Projects section: <HomeProjects t={t.projects} tProjects={locale.projects} /> */}
      <HomeSkills t={t.skills} tSkills={locale.skills} />
      <HomeAbout t={t.about} />
      <HomeContacts t={t.contacts} />
    </>
  );
}
