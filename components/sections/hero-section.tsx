"use client";

import Link from "next/link";
import {
  ArrowRightIcon,
  Code2Icon,
  NetworkIcon,
  SparklesIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

const stack = ["MongoDB", "Express", "React", "Next.js", "NestJS", "Node.js"];

function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36"
      aria-labelledby="hero-heading"
    >
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black,transparent_80%)] opacity-35" />

      <Container className="grid min-h-[calc(100vh-9rem)] items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="max-w-3xl">
          <Reveal>
            <div className="text-muted-foreground mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium shadow-inner shadow-white/5">
              <SparklesIcon className="text-brand size-3.5" />
              Available for senior product engineering roles
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1
              id="hero-heading"
              className="text-foreground text-5xl font-semibold tracking-normal text-balance sm:text-6xl lg:text-7xl"
            >
              Building fast, resilient web platforms with MERN, Next.js, and
              NestJS.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="text-muted-foreground mt-6 max-w-2xl text-base leading-8 text-pretty sm:text-lg">
              Senior full-stack engineer with 3+ years of experience turning
              product requirements into accessible, observable, and scalable
              applications.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="brand" size="xl" asChild>
                <Link href={siteConfig.links.email}>
                  Start a conversation
                  <ArrowRightIcon data-icon="inline-end" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link href={siteConfig.links.github} target="_blank">
                  <Code2Icon data-icon="inline-start" />
                  View GitHub
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-10 flex flex-wrap gap-2" aria-label="Core stack">
              {stack.map((item) => (
                <span
                  key={item}
                  className="text-muted-foreground rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative">
          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : { y: [0, -10, 0], rotateX: [0, 1.5, 0] }
            }
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative mx-auto w-full max-w-[36rem]"
          >
            <div className="bg-brand/10 absolute -inset-6 -z-10 rounded-[2rem] blur-3xl" />
            <div className="bg-surface/85 overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40 backdrop-blur">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="flex gap-2">
                  <span className="size-3 rounded-full bg-red-400/80" />
                  <span className="bg-brand/80 size-3 rounded-full" />
                  <span className="size-3 rounded-full bg-emerald-400/80" />
                </div>
                <span className="text-muted-foreground font-mono text-xs">
                  portfolio.api.ts
                </span>
              </div>

              <div className="grid gap-0 lg:grid-cols-[1fr_12rem]">
                <div className="text-muted-foreground space-y-4 p-5 font-mono text-sm leading-7 sm:p-6">
                  <p>
                    <span className="text-steel">const</span>{" "}
                    <span className="text-brand">engineer</span> = {"{"}
                  </p>
                  <p className="pl-5">
                    role:{" "}
                    <span className="text-foreground">
                      &quot;Senior Full-Stack&quot;
                    </span>
                    ,
                  </p>
                  <p className="pl-5">
                    focus:{" "}
                    <span className="text-foreground">
                      &quot;MERN + Next.js + NestJS&quot;
                    </span>
                    ,
                  </p>
                  <p className="pl-5">
                    ships:{" "}
                    <span className="text-foreground">
                      [&quot;DX&quot;, &quot;UX&quot;, &quot;APIs&quot;]
                    </span>
                  </p>
                  <p>{"};"}</p>
                </div>

                <div className="border-t border-white/10 bg-white/[0.03] p-5 lg:border-t-0 lg:border-l">
                  <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
                    <HeroMetric label="Experience" value="3+ yrs" />
                    <HeroMetric label="Runtime" value="Node" />
                    <HeroMetric label="Frontend" value="Next" />
                    <HeroMetric label="Backend" value="Nest" />
                  </div>
                </div>
              </div>
            </div>

            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              className="bg-background/90 text-foreground hover:border-brand/50 hover:text-brand absolute -right-2 -bottom-5 inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm font-medium shadow-xl shadow-black/30 backdrop-blur transition-colors sm:right-4"
            >
              <NetworkIcon className="size-4" />
              LinkedIn
            </Link>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}

function HeroMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-background/45 rounded-xl border border-white/10 p-3">
      <p className="text-muted-foreground text-xs">{label}</p>
      <p className="text-foreground mt-1 text-lg font-semibold">{value}</p>
    </div>
  );
}

export { HeroSection };
