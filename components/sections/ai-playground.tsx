"use client";

import { useEffect, useMemo, useState } from "react";
import { RefreshCwIcon, SendIcon, SparklesIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const samplePrompts = [
  "Generate a dashboard layout for cyber incident triage.",
  "Convert SIEM alert data into an executive summary.",
  "Create dynamic UI cards for customer onboarding metrics.",
];

const simulatedResponses = [
  {
    match: "siem",
    response:
      "Gemini simulation: Parsed the SIEM alert context, normalized severity, grouped suspicious events by source, and returned JSON for an executive summary panel with risk, timeline, affected assets, and recommended next actions.",
  },
  {
    match: "dashboard",
    response:
      "Gemini simulation: Converted the product goal into a dynamic dashboard schema with KPI tiles, investigation queues, priority filters, trend charts, and action panels for analyst workflows.",
  },
  {
    match: "onboarding",
    response:
      "Gemini simulation: Generated JSON for onboarding health cards, activation milestones, account risks, and a business-facing summary that can render as adaptive UI components.",
  },
  {
    match: "default",
    response:
      "Gemini simulation: Analyzed the prompt, routed it through a Node.js service, transformed the LLM output into validated JSON, and produced a dynamic UI blueprint ready for a business workflow.",
  },
];

function AiPlayground() {
  const [prompt, setPrompt] = useState(samplePrompts[0]);
  const [typedResponse, setTypedResponse] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const selectedResponse = useMemo(() => {
    const normalizedPrompt = prompt.toLowerCase();
    return (
      simulatedResponses.find(
        (item) =>
          item.match !== "default" && normalizedPrompt.includes(item.match),
      ) ?? simulatedResponses[simulatedResponses.length - 1]
    );
  }, [prompt]);

  useEffect(() => {
    runSimulation(selectedResponse.response);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function runSimulation(response = selectedResponse.response) {
    setTypedResponse("");
    setIsTyping(true);

    let index = 0;
    const interval = window.setInterval(() => {
      index += 2;
      setTypedResponse(response.slice(0, index));

      if (index >= response.length) {
        window.clearInterval(interval);
        setIsTyping(false);
      }
    }, 18);
  }

  return (
    <div className="bg-background/45 rounded-2xl border border-white/10 p-4 sm:p-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-foreground text-sm font-semibold">AI Playground</p>
          <p className="text-muted-foreground mt-1 text-xs">
            Local simulation, no API key required
          </p>
        </div>
        <span
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium",
            isTyping
              ? "border-brand/30 bg-brand-muted text-brand"
              : "text-muted-foreground border-white/10 bg-white/[0.04]",
          )}
        >
          <SparklesIcon className="size-3" />
          {isTyping ? "Thinking" : "Ready"}
        </span>
      </div>

      <div className="mt-5 grid gap-2">
        <p className="text-muted-foreground text-xs font-medium">
          Sample prompts
        </p>
        <div className="flex flex-wrap gap-2">
          {samplePrompts.map((sample) => (
            <button
              key={sample}
              type="button"
              onClick={() => setPrompt(sample)}
              className="text-muted-foreground hover:border-brand/40 hover:text-foreground rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-left text-xs font-medium transition-colors"
            >
              {sample}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-3">
        <Textarea
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          className="min-h-28 resize-none border-white/10 bg-black/20 p-4 text-sm leading-7"
          aria-label="AI playground prompt"
        />
        <div className="flex flex-col gap-2 sm:flex-row">
          <Button
            type="button"
            variant="brand"
            size="lg"
            onClick={() => runSimulation()}
            disabled={isTyping || prompt.trim().length === 0}
          >
            <SendIcon data-icon="inline-start" />
            Simulate response
          </Button>
          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={() => {
              setPrompt(samplePrompts[0]);
              runSimulation(simulatedResponses[1].response);
            }}
            disabled={isTyping}
          >
            <RefreshCwIcon data-icon="inline-start" />
            Reset
          </Button>
        </div>
      </div>

      <div className="text-muted-foreground mt-5 min-h-44 rounded-xl border border-white/10 bg-black/30 p-4 font-mono text-sm leading-7">
        <p className="text-brand mb-3 text-xs font-medium">simulated.output</p>
        <p>
          {typedResponse}
          {isTyping ? <span className="text-brand">|</span> : null}
        </p>
      </div>
    </div>
  );
}

export { AiPlayground };
