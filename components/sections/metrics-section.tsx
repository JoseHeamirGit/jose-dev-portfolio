import { Layers3Icon, NetworkIcon, WorkflowIcon } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import {
  PortfolioCard,
  PortfolioCardIcon,
} from "@/components/ui/portfolio-card";
import { SectionHeading } from "@/components/ui/section-heading";

const metrics = [
  {
    value: "3+",
    label: "Years building production web applications",
    icon: WorkflowIcon,
  },
  {
    value: "12",
    label: "Core technologies across frontend, backend, cloud, and AI",
    icon: Layers3Icon,
  },
  {
    value: "Full",
    label: "Ownership from system design through deployment readiness",
    icon: NetworkIcon,
  },
];

function MetricsSection() {
  return (
    <section className="py-20 sm:py-24" aria-labelledby="metrics-title">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Experience Metrics"
              title="A senior-leaning delivery profile built around ownership."
              description="The numbers are intentionally simple: the stronger signal is end-to-end responsibility across product, engineering, and architecture decisions."
              id="metrics-title"
            />
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-3">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;

              return (
                <Reveal key={metric.label} delay={index * 0.08}>
                  <PortfolioCard className="h-full">
                    <PortfolioCardIcon>
                      <Icon className="size-5" />
                    </PortfolioCardIcon>
                    <p className="text-brand text-4xl font-semibold tracking-normal">
                      {metric.value}
                    </p>
                    <p className="text-muted-foreground mt-3 leading-7">
                      {metric.label}
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

export { MetricsSection };
