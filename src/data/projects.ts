import projectData from './projects.json';
export type TextBlock = { title: string; body: string };
export type Project = {
  slug: string; number: string; name: string; title: string; category: string;
  summary: string; cardSummary: string; role: string; team: string; period: string; materials: string[];
  award: boolean; overview: string; contributions: TextBlock[]; processIntro: string;
  process: TextBlock[]; decisions: { title: string; initial: string; evidence: string; change: string }[];
  result: string; reflection: string; sourcePages: number[]; image?: string;
  downloads?: Record<string, string>;
};
export const projects: Project[] = projectData;
