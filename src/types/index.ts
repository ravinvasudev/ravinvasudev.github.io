export interface Profile {
  name: string;
  headline: string;
  location: {
    city: string;
    region: string;
    country: string;
  };
  contact: {
    email: string;
    phone: string;
    linkedin: string;
  };
  totalExperience: string;
  industries: string[];
  summary: string[];
  careerHighlights: string[];
  cta: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
}

export interface Metric {
  label: string;
  value: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  location: string;
  title: string;
  startDate: string;
  endDate: string | null;
  isCurrent: boolean;
  summary: string;
  highlights: string[];
  tech: string[];
  metrics: Metric[];
}

export interface ProjectItem {
  id: string;
  name: string;
  timeframe: string;
  domain: string;
  role: string;
  problem: string;
  solution: string;
  architecture: string[];
  tech: string[];
  impact: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Achievement {
  id: string;
  type: string;
  title: string;
  organization?: string;
  timeframe?: string;
  value?: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  graduationYear: number | string | null;
}
