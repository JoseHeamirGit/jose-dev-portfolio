export const siteConfig = {
  name: "Jose Dev Portfolio",
  headline: "Senior MERN, Next.js, and NestJS Engineer",
  description:
    "Portfolio foundation for a Senior MERN, Next.js, and NestJS engineer focused on production-grade web platforms.",
  url: "https://jose-dev-portfolio.netlify.app",
  navItems: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Experience", href: "#experience" },
    { label: "AI", href: "#ai" },
    { label: "Expertise", href: "#expertise" },
  ],
  links: {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
    email: "mailto:hello@example.com",
  },
} as const;

export type NavItem = (typeof siteConfig.navItems)[number];
