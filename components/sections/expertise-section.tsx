import {
  BoxesIcon,
  CpuIcon,
  DatabaseIcon,
  GitBranchIcon,
  NetworkIcon,
  ServerIcon,
} from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import {
  PortfolioCard,
  PortfolioCardIcon,
} from "@/components/ui/portfolio-card";
import { SectionHeading } from "@/components/ui/section-heading";

const expertise = [
  {
    title: "API architecture",
    description:
      "REST API design, request validation, resource modeling, error contracts, and integration-ready service boundaries.",
    icon: NetworkIcon,
  },
  {
    title: "NestJS application design",
    description:
      "Modules, providers, guards, pipes, interceptors, and Dependency Injection patterns that keep backend code organized.",
    icon: ServerIcon,
  },
  {
    title: "MERN product systems",
    description:
      "React experiences backed by Node.js, Express, and MongoDB with attention to state, data flow, and deployment shape.",
    icon: DatabaseIcon,
  },
  {
    title: "Microservices thinking",
    description:
      "Clear service responsibilities, contract-first communication, failure boundaries, and practical tradeoffs before splitting systems.",
    icon: BoxesIcon,
  },
  {
    title: "System design",
    description:
      "Caching, queues, persistence choices, API gateways, deployment constraints, and scalability decisions explained clearly.",
    icon: GitBranchIcon,
  },
  {
    title: "AI integration",
    description:
      "Google Gemini backed workflows for assistants, content generation, product automation, and developer-facing tools.",
    icon: CpuIcon,
  },
];

function ExpertiseSection() {
  return (
    <section
      id="expertise"
      className="py-20 pb-28 sm:py-24 sm:pb-32"
      aria-labelledby="expertise-title"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Technical Expertise"
            title="Deep enough to architect, practical enough to ship."
            description="The focus is on durable engineering decisions: modular services, clean interfaces, thoughtful infrastructure, and user-facing quality."
            id="expertise-title"
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {expertise.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={(index % 3) * 0.08}>
                <PortfolioCard className="h-full">
                  <PortfolioCardIcon>
                    <Icon className="size-5" />
                  </PortfolioCardIcon>
                  <h3 className="text-foreground text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mt-3 leading-7">
                    {item.description}
                  </p>
                </PortfolioCard>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export { ExpertiseSection };
