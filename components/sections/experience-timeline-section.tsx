import {
  BriefcaseBusinessIcon,
  CalendarDaysIcon,
  ChartNoAxesCombinedIcon,
  CheckCircle2Icon,
  ShieldCheckIcon,
  SparklesIcon,
} from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import {
  PortfolioCard,
  PortfolioCardIcon,
} from "@/components/ui/portfolio-card";
import { SectionHeading } from "@/components/ui/section-heading";

const experience = [
  {
    company: "Spot Future Technology India Services",
    role: "Lead Developer",
    progression:
      "Started as Associate Developer and promoted to Lead Developer",
    period: "Jan 2023 - Feb 2026",
    product: "Cyber Analytics Platform",
    context:
      "Worked on a cybersecurity analytics product with exposure to SIEM and SOAR workflows, operational dashboards, and API-backed investigation flows.",
    responsibilities: [
      "Led feature delivery across frontend and backend modules for a cyber analytics platform.",
      "Built reusable React interfaces for dashboards, investigation workflows, and operational views.",
      "Designed and integrated REST API flows for platform data, user actions, and service orchestration.",
      "Collaborated on backend modules using Node.js and NestJS patterns with clear service boundaries.",
      "Improved code maintainability through reusable components, predictable state flow, and consistent UI patterns.",
    ],
    technologies: [
      "React",
      "Next.js",
      "NestJS",
      "Node.js",
      "Express",
      "MongoDB",
      "REST APIs",
      "Microservices",
      "Docker",
      "AWS",
      "SIEM",
      "SOAR",
    ],
    impact: [
      "Helped transform cybersecurity data into practical workflows for analysis and response.",
      "Supported faster investigation experiences through cleaner interfaces and API-driven platform features.",
      "Grew from Associate Developer into a Lead Developer role through ownership, delivery quality, and technical reliability.",
    ],
  },
];

function ExperienceTimelineSection() {
  return (
    <section
      id="experience"
      className="relative py-20 sm:py-24"
      aria-labelledby="experience-title"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Professional Experience"
            title="A growth path from associate execution to lead-level ownership."
            description="The timeline highlights product delivery, technical responsibility, and business impact across a cybersecurity analytics platform."
            id="experience-title"
          />
        </Reveal>

        <div className="relative mt-12">
          <div className="from-brand absolute top-0 bottom-0 left-4 hidden w-px bg-gradient-to-b via-white/15 to-transparent md:block" />

          <div className="space-y-8">
            {experience.map((item, index) => (
              <Reveal key={item.company} delay={index * 0.08}>
                <article className="relative md:pl-12">
                  <div className="border-brand/40 bg-background absolute top-8 left-0 hidden size-8 place-items-center rounded-full border shadow-[0_0_30px_oklch(0.72_0.19_50_/_20%)] md:grid">
                    <span className="bg-brand size-2.5 rounded-full" />
                  </div>

                  <PortfolioCard className="p-0">
                    <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                      <div className="border-b border-white/10 p-6 sm:p-8 lg:border-r lg:border-b-0">
                        <PortfolioCardIcon>
                          <BriefcaseBusinessIcon className="size-5" />
                        </PortfolioCardIcon>

                        <div className="flex flex-wrap items-center gap-2">
                          <span className="border-brand/25 bg-brand-muted text-brand inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium">
                            <SparklesIcon className="size-3" />
                            Promotion track
                          </span>
                          <span className="text-muted-foreground inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium">
                            <CalendarDaysIcon className="size-3" />
                            {item.period}
                          </span>
                        </div>

                        <h3 className="text-foreground mt-6 text-2xl font-semibold tracking-normal sm:text-3xl">
                          {item.role}
                        </h3>
                        <p className="text-brand mt-2 text-base font-medium">
                          {item.company}
                        </p>
                        <p className="text-muted-foreground mt-4 leading-7">
                          {item.progression}
                        </p>

                        <div className="bg-background/45 mt-8 rounded-2xl border border-white/10 p-5">
                          <div className="flex items-center gap-3">
                            <ShieldCheckIcon className="text-brand size-5" />
                            <p className="text-foreground font-medium">
                              {item.product}
                            </p>
                          </div>
                          <p className="text-muted-foreground mt-3 leading-7">
                            {item.context}
                          </p>
                        </div>
                      </div>

                      <div className="grid gap-6 p-6 sm:p-8">
                        <TimelineBlock
                          title="Responsibilities"
                          icon={CheckCircle2Icon}
                          items={item.responsibilities}
                        />

                        <TimelineTechnologies
                          technologies={item.technologies}
                        />

                        <TimelineBlock
                          title="Business impact"
                          icon={ChartNoAxesCombinedIcon}
                          items={item.impact}
                        />
                      </div>
                    </div>
                  </PortfolioCard>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function TimelineBlock({
  title,
  icon: Icon,
  items,
}: {
  title: string;
  icon: typeof CheckCircle2Icon;
  items: string[];
}) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <span className="text-brand grid size-8 place-items-center rounded-lg border border-white/10 bg-white/[0.04]">
          <Icon className="size-4" />
        </span>
        <h4 className="text-foreground font-semibold">{title}</h4>
      </div>
      <ul className="grid gap-3">
        {items.map((item) => (
          <li
            key={item}
            className="text-muted-foreground flex gap-3 text-sm leading-7"
          >
            <span className="bg-brand mt-2 size-1.5 shrink-0 rounded-full" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TimelineTechnologies({ technologies }: { technologies: string[] }) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <span className="text-brand grid size-8 place-items-center rounded-lg border border-white/10 bg-white/[0.04]">
          <BriefcaseBusinessIcon className="size-4" />
        </span>
        <h4 className="text-foreground font-semibold">Technologies</h4>
      </div>
      <div className="flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="text-muted-foreground hover:border-brand/40 hover:text-foreground rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium transition-colors"
          >
            {technology}
          </span>
        ))}
      </div>
    </div>
  );
}

export { ExperienceTimelineSection };
