import SkillBlock from "@/components/SkillBlock";
import skills from "@/consts/skills";

interface AboutSkillsProps {
  t: { title: string };
  tSkills: Record<string, string>;
}

export default function AboutSkills({ t, tSkills }: AboutSkillsProps) {
  return (
    <section className="skills">
      <h2 className="h2">{t.title}</h2>
      <div className="about-skills__content">
        {Object.keys(skills).map((id) => (
          <SkillBlock key={id} id={id} t={tSkills} />
        ))}
      </div>
    </section>
  );
}
