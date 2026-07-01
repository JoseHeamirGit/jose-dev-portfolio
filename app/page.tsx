import { AboutSection } from "@/components/sections/about-section";
import { ExpertiseSection } from "@/components/sections/expertise-section";
import { ExperienceTimelineSection } from "@/components/sections/experience-timeline-section";
import { HeroSection } from "@/components/sections/hero-section";
import { MetricsSection } from "@/components/sections/metrics-section";
import { SkillsSection } from "@/components/sections/skills-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <MetricsSection />
      <ExperienceTimelineSection />
      <ExpertiseSection />
    </>
  );
}
