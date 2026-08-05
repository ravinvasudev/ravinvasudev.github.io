import { About } from "../components/sections/about";
import { CaseStudies } from "../components/sections/case-studies";
import { ContactCta } from "../components/sections/contact-cta";
import { ExperienceTimeline } from "../components/sections/experience-timeline";
import { Hero } from "../components/sections/hero";
import { ImpactStrip } from "../components/sections/impact-strip";
import { LatestWriting } from "../components/sections/latest-writing";
import { SkillsMatrix } from "../components/sections/skills-matrix";
import { getFeaturedPosts } from "../lib/posts";

export default async function HomePage() {
  const posts = await getFeaturedPosts();

  return (
    <>
      <Hero />
      <ImpactStrip />
      <CaseStudies />
      <ExperienceTimeline />
      <SkillsMatrix />
      <LatestWriting posts={posts} />
      <About />
      <ContactCta />
    </>
  );
}
