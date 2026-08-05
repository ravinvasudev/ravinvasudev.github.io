export interface SocialLinks {
  linkedin: string;
  github: string;
  email: string;
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  totalExperience: string;
  positioningStatement: string;
  recruiterSummary: string;
  narrative: string[];
  leadershipPhilosophy: string[];
  industries: string[];
  resumeUrl: string;
  socials: SocialLinks;
}

export interface Metric {
  id: string;
  label: string;
  value: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  location: string;
  title: string;
  startDate: string;
  endDate: string | null;
  isCurrent: boolean;
  coreFocus: string;
  highlights: string[];
  metrics: string[];
  techStack: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  timeframe: string;
  domain: string;
  role: string;
  problem: string;
  solution: string;
  impact: string[];
  architecture: string[];
  techStack: string[];
  featured: boolean;
}

export interface SkillCategory {
  id: string;
  category: string;
  focus: string;
  skills: string[];
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  timeframe: string;
  description: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  graduationYear: string;
}

export interface PostFrontmatter {
  title: string;
  publishedAt: string;
  summary: string;
  tags: string[];
  canonicalUrl: string;
  featured: boolean;
}

export interface Post extends PostFrontmatter {
  slug: string;
  readingMinutes: number;
}

export interface PostWithContent extends Post {
  content: string;
}

export interface NavItem {
  href: string;
  label: string;
}
