import { Code2Icon, GaugeIcon, ShieldCheckIcon } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import {
  PortfolioCard,
  PortfolioCardIcon,
} from "@/components/ui/portfolio-card";
import { SectionHeading } from "@/components/ui/section-heading";

const principles = [
  {
    title: "Product-minded execution",
    description:
      "I translate unclear requirements into shippable interfaces, API contracts, and delivery plans that stay close to user value.",
    icon: GaugeIcon,
  },
  {
    title: "Architecture with ownership",
    description:
      "I design module boundaries, dependency flow, and service contracts so teams can change systems without fear.",
    icon: Code2Icon,
  },
  {
    title: "Operational quality",
    description:
      "I care about accessibility, performance, observability, and maintainability as part of the feature, not as cleanup work.",
    icon: ShieldCheckIcon,
  },
];

function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 sm:py-24"
      aria-labelledby="about-title"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="About"
              title="A full-stack engineer who can move from product intent to production systems."
              description="My work sits across React and Next.js frontends, NestJS and Node.js backends, and the architecture decisions that keep applications readable as they grow."
              id="about-title"
            />
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {principles.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <Reveal key={principle.title} delay={index * 0.08}>
                  <PortfolioCard className="h-full">
                    <PortfolioCardIcon>
                      <Icon className="size-5" />
                    </PortfolioCardIcon>
                    <h3 className="text-foreground text-lg font-semibold">
                      {principle.title}
                    </h3>
                    <p className="text-muted-foreground mt-3 leading-7">
                      {principle.description}
                    </p>
                  </PortfolioCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export { AboutSection };
