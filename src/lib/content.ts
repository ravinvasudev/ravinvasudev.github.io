import { promises as fs } from "node:fs";
import path from "node:path";

import type {
    Achievement,
    EducationItem,
    ExperienceItem,
    Profile,
    ProjectItem,
    SkillCategory,
} from "../types";

async function readDataFile<T>(name: string): Promise<T> {
  const filePath = path.join(process.cwd(), "data", name);
  const content = await fs.readFile(filePath, "utf8");
  return JSON.parse(content) as T;
}

export const getProfile = (): Promise<Profile> =>
  readDataFile<Profile>("profile.json");
export const getExperience = (): Promise<ExperienceItem[]> =>
  readDataFile<ExperienceItem[]>("experience.json");
export const getProjects = (): Promise<ProjectItem[]> =>
  readDataFile<ProjectItem[]>("projects.json");
export const getSkills = (): Promise<SkillCategory[]> =>
  readDataFile<SkillCategory[]>("skills.json");
export const getAchievements = (): Promise<Achievement[]> =>
  readDataFile<Achievement[]>("achievements.json");
export const getEducation = (): Promise<EducationItem[]> =>
  readDataFile<EducationItem[]>("education.json");
