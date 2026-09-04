import type { SiteProfile } from "../types/content";

export const siteProfile: SiteProfile = {
  name: "Arthur Asasira",
  role: "Software, embedded systems, and IoT builder",
  location: "Acton, Massachusetts",
  availability: "Open to Greater Boston opportunities",
  email: "arthurasasira1@gmail.com",
  github: "https://github.com/ArthurKagwa",
  linkedIn: "https://www.linkedin.com/in/asasira-arthur-602a131ab/",
  canonicalUrl: "https://asasira.dev",
};

export const navLinks = [
  { href: "/#projects", label: "Projects", match: "/projects" },
  { href: "/about", label: "About", match: "/about" },
  { href: "/resume", label: "Résumé", match: "/resume" },
  { href: "/contact", label: "Contact", match: "/contact" },
];
