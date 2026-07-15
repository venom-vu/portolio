import Dots from "@/components/Dots";
import SkillBlock from "@/components/SkillBlock";
import skills from "@/consts/skills";

interface HomeSkillsProps {
  t: { title: string };
  tSkills: Record<string, string>;
}

export default function HomeSkills({ t, tSkills }: HomeSkillsProps) {
  const categoryIds = (Object.keys(skills) as string[]).filter(
    (id) => id !== "tool"
  );

  return (
    <section className="skills">
      <h2 className="h2">{t.title}</h2>
      <div className="skills__content">
        <div className="skills__illustrations illustrations">
          <img
            src="/images/logo-outline.svg"
            alt=""
            className="illustrations__logo"
          />
          <Dots width={4} height={4} />
          <Dots width={6} height={6} />
        </div>
        <div className="skills__list">
          {categoryIds.map((id) => (
            <SkillBlock key={id} id={id} t={tSkills} />
          ))}
        </div>
      </div>
    </section>
  );
}
