type SkillCategory =
  | "frontend"
  | "backend"
  | "database"
  | "devops"
  | "tool"
  | "blockchain";

const skills: Record<SkillCategory, string[]> = {
  frontend: ["js", "ts", "vue", "nuxt", "tailwind", "bootstrap", "scss"],
  backend: ["node", "express", "nest"],
  database: ["postgresql", "mongo"],
  tool: ["git", "github"],
  devops: ["docker", "linux", "nginx", "github-action"],
  blockchain: ["cardano"],
};

export default skills;
