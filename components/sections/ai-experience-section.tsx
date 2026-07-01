import {
  ArrowDownIcon,
  BotIcon,
  BracesIcon,
  BrainCircuitIcon,
  Building2Icon,
  FileJsonIcon,
  PanelsTopLeftIcon,
  ServerIcon,
} from "lucide-react";

import { AiPlayground } from "@/components/sections/ai-playground";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import {
  PortfolioCard,
  PortfolioCardIcon,
} from "@/components/ui/portfolio-card";
import { SectionHeading } from "@/components/ui/section-heading";

const flowSteps = [
  {
    title: "Google Gemini Integration",
    description: "Model access is isolated behind backend services.",
    icon: BotIcon,
  },
  {
    title: "Prompt",
    description: "User intent is structured with business context.",
    icon: BrainCircuitIcon,
  },
  {
    title: "Node.js Backend",
    description: "Requests are validated, enriched, and routed.",
    icon: ServerIcon,
  },
  {
    title: "LLM Processing",
    description: "The model reasons over domain-specific instructions.",
    icon: BrainCircuitIcon,
  },
  {
    title: "JSON Transformation",
    description: "Responses are normalized into UI-safe schemas.",
    icon: FileJsonIcon,
  },
  {
    title: "Dynamic UI Generation",
    description: "Validated JSON renders adaptive product interfaces.",
    icon: PanelsTopLeftIcon,
  },
  {
    title: "Business Application",
    description: "The final experience supports real workflows.",
    icon: Building2Icon,
  },
];

function AiExperienceSection() {
  return (
    <section id="ai" className="py-20 sm:py-24" aria-labelledby="ai-title">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="AI Experience"
            title="AI workflows that move from prompt to business-ready interfaces."
            description="A practical architecture for integrating Google Gemini with a Node.js backend, transforming model output into JSON, and rendering dynamic UI for business applications."
            id="ai-title"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
          <Reveal>
            <PortfolioCard className="h-full">
              <PortfolioCardIcon>
                <BracesIcon className="size-5" />
              </PortfolioCardIcon>
              <h3 className="text-foreground text-2xl font-semibold tracking-normal">
                Animated architecture flow
              </h3>
              <p className="text-muted-foreground mt-3 leading-7">
                The flow models a production-friendly AI feature path: keep
                prompt handling on the backend, validate output, and let the UI
                render from predictable data.
              </p>

              <div className="mt-8 grid gap-3">
                {flowSteps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <Reveal key={step.title} delay={(index % 3) * 0.06}>
                      <div className="relative">
                        <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                          <span className="bg-background/60 text-brand grid size-10 shrink-0 place-items-center rounded-lg border border-white/10">
                            <Icon className="size-5" />
                          </span>
                          <div>
                            <p className="text-foreground font-semibold">
                              {step.title}
                            </p>
                            <p className="text-muted-foreground mt-1 text-sm leading-6">
                              {step.description}
                            </p>
                          </div>
                        </div>
                        {index < flowSteps.length - 1 ? (
                          <div className="text-brand grid h-8 place-items-center">
                            <ArrowDownIcon className="size-4 animate-bounce" />
                          </div>
                        ) : null}
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </PortfolioCard>
          </Reveal>

          <Reveal delay={0.12}>
            <PortfolioCard className="h-full">
              <PortfolioCardIcon>
                <BotIcon className="size-5" />
              </PortfolioCardIcon>
              <h3 className="text-foreground text-2xl font-semibold tracking-normal">
                Simulated Gemini playground
              </h3>
              <p className="text-muted-foreground mt-3 leading-7">
                Try realistic sample prompts and watch a local typed response.
                This demonstrates the interaction pattern without storing
                secrets or calling an external API.
              </p>
              <div className="mt-8">
                <AiPlayground />
              </div>
            </PortfolioCard>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export { AiExperienceSection };
