import skills from "@/consts/skills";
import techs from "@/consts/techs";

interface SkillBlockProps {
  id: string;
  t: Record<string, string>;
}

export default function SkillBlock({ id, t }: SkillBlockProps) {
  const list = skills[id as keyof typeof skills] ?? [];

  return (
    <div className="skill-block">
      <div className="skill-block__name">{t[id]}</div>
      <ul className="skill-block__list">
        {list.map((techKey) => (
          <li key={techKey}>{techs[techKey] ?? techKey}</li>
        ))}
      </ul>
    </div>
  );
}
