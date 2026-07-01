export const siteConfig = {
  name: "Jose Dev Portfolio",
  headline: "Senior MERN, Next.js, and NestJS Engineer",
  description:
    "Portfolio foundation for a Senior MERN, Next.js, and NestJS engineer focused on production-grade web platforms.",
  url: "https://jose-dev-portfolio.netlify.app",
  navItems: [
    { label: "Home", href: "#home" },
    { label: "Work", href: "#work" },
    { label: "Stack", href: "#stack" },
    { label: "Contact", href: "#contact" },
  ],
  links: {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
    email: "mailto:hello@example.com",
  },
} as const;

export type NavItem = (typeof siteConfig.navItems)[number];
