export interface ProjectLinks {
  figma?: string;
  live?: string;
  github?: string;
  cached?: string;
}

export interface Project {
  id: string;
  techs: string[];
  links: ProjectLinks;
  hasImage?: boolean;
  isSmall?: boolean;
  isInProgress?: boolean;
}
