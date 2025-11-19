export interface Project {
  id: number;
  title: string;
  deployUrl: string | null;
  gitUrl: string;
  image: string;
  type: string[];
}

export interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  languages: string;
  tools: string[];
  last?: boolean;
}

export interface ProjectCardProps {
  project: Project;
}

export type FilterType = "All" | "HTML" | "React" | "Node" | "TS";
