import {
  BoxIcon,
  BrainCircuitIcon,
  CloudIcon,
  Code2Icon,
  DatabaseIcon,
  RouteIcon,
  ServerIcon,
} from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import {
  PortfolioCard,
  PortfolioCardIcon,
} from "@/components/ui/portfolio-card";
import { SectionHeading } from "@/components/ui/section-heading";

const skillGroups = [
  {
    title: "Frontend engineering",
    description:
      "Modern, accessible interfaces with component systems, server rendering, and performance-minded interaction design.",
    icon: Code2Icon,
    items: ["React", "Next.js"],
  },
  {
    title: "Backend platforms",
    description:
      "Typed APIs, modular services, authentication flows, data validation, and business logic that remains testable.",
    icon: ServerIcon,
    items: ["Node.js", "NestJS", "Express", "REST APIs"],
  },
  {
    title: "Data and infrastructure",
    description:
      "Persistence, containerized delivery, and cloud-ready foundations for web products that need room to scale.",
    icon: DatabaseIcon,
    items: ["MongoDB", "Docker", "AWS"],
  },
  {
    title: "AI-enabled product work",
    description:
      "Practical integration of generative AI into user workflows, internal tools, and API-backed experiences.",
    icon: BrainCircuitIcon,
    items: ["Google Gemini"],
  },
  {
    title: "Distributed systems",
    description:
      "Service boundaries, fault isolation, contracts, and data flow for features that span multiple application layers.",
    icon: CloudIcon,
    items: ["Microservices", "System Design"],
  },
  {
    title: "Application architecture",
    description:
      "Maintainable codebases shaped around explicit dependencies, reusable modules, and clear ownership boundaries.",
    icon: RouteIcon,
    items: ["Dependency Injection", "REST APIs"],
  },
];

const highlightIcons = [Code2Icon, ServerIcon, DatabaseIcon, BoxIcon];

function SkillsSection() {
  return (
    <section
      id="stack"
      className="py-20 sm:py-24"
      aria-labelledby="skills-title"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Technologies from real delivery, not a keyword wall."
            description="The stack is centered on production JavaScript and TypeScript systems, with enough infrastructure fluency to own features from browser to deployment."
            id="skills-title"
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <Reveal key={group.title} delay={(index % 3) * 0.08}>
                <PortfolioCard className="h-full">
                  <PortfolioCardIcon>
                    <Icon className="size-5" />
                  </PortfolioCardIcon>
                  <h3 className="text-foreground text-xl font-semibold">
                    {group.title}
                  </h3>
                  <p className="text-muted-foreground mt-3 leading-7">
                    {group.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.items.map((item, itemIndex) => {
                      const HighlightIcon =
                        highlightIcons[itemIndex % highlightIcons.length];

                      return (
                        <span
                          key={item}
                          className="text-muted-foreground inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium"
                        >
                          <HighlightIcon className="text-brand size-3" />
                          {item}
                        </span>
                      );
                    })}
                  </div>
                </PortfolioCard>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export { SkillsSection };
