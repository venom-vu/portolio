export type LocaleKey = "en" | "vi";

export interface LocaleData {
  header: {
    home: string;
    projects: string;
    about: string;
    contacts: string;
  };
  footer: {
    description: string;
    copyright: string;
    media: string;
  };
  skills: {
    language: string;
    database: string;
    other: string;
    tool: string;
    framework: string;
  };
  projects: Record<string, { name: string; description: string }>;
  pages: {
    home: {
      hero: {
        title: string;
        title2: string;
        description: string;
        button: string;
        status: string;
      };
      quote: { text: string; author: string };
      projects: { title: string; button: string };
      skills: { title: string };
      about: { title: string; description: string[]; button: string };
      contacts: {
        title: string;
        text: string;
        media: string;
        donate: string;
      };
    };
    projects: {
      description: string;
      decent: string;
      small: string;
      inProgress: string;
    };
    about: {
      description: string;
      about: { description: string[] };
      skills: { title: string };
      facts: { title: string; list: string[] };
    };
    contacts: { description: string };
  };
}
