"use client";

import Link from "next/link";
import { MenuIcon } from "lucide-react";

import { useScrollThreshold } from "@/hooks/use-scroll-threshold";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function SiteHeader() {
  const hasScrolled = useScrollThreshold(10);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all duration-300",
        hasScrolled &&
          "border-border/80 bg-background/80 shadow-[0_12px_40px_oklch(0_0_0_/_28%)] backdrop-blur-xl",
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="#home"
          className="group inline-flex items-center gap-3"
          aria-label={`${siteConfig.name} home`}
        >
          <span className="text-brand group-hover:border-brand/50 grid size-8 place-items-center rounded-lg border border-white/10 bg-white/[0.06] text-sm font-semibold shadow-inner shadow-white/5 transition-colors">
            J
          </span>
          <span className="text-foreground hidden text-sm font-semibold tracking-tight sm:inline">
            Jose.dev
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {siteConfig.navItems.map((item) => (
            <Button key={item.href} variant="ghost" size="sm" asChild>
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="outline" size="sm" asChild>
            <Link href={siteConfig.links.github} target="_blank">
              GitHub
            </Link>
          </Button>
          <Button variant="brand" size="sm" asChild>
            <Link href={siteConfig.links.email}>Contact</Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              aria-label="Open navigation menu"
            >
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent className="border-border bg-background/95 backdrop-blur-xl">
            <SheetHeader>
              <SheetTitle>Jose.dev</SheetTitle>
            </SheetHeader>
            <nav className="grid gap-2 px-4" aria-label="Mobile primary">
              {siteConfig.navItems.map((item) => (
                <SheetClose key={item.href} asChild>
                  <Button
                    variant="ghost"
                    size="lg"
                    className="justify-start"
                    asChild
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </Button>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-auto grid gap-2 p-4">
              <SheetClose asChild>
                <Button variant="outline" size="lg" asChild>
                  <Link href={siteConfig.links.github} target="_blank">
                    GitHub
                  </Link>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button variant="brand" size="lg" asChild>
                  <Link href={siteConfig.links.email}>Contact</Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}

export { SiteHeader };
