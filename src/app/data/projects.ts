import type { ProjectCaseStudy } from "../types/content";
import { validatePublishedProjects } from "../lib/content-validation";

const commonAiUse =
  "AI-assisted tools may speed up drafting and implementation. Public claims are checked against the running product, source material, and manual review before publication.";

export const projects: ProjectCaseStudy[] = [
  {
    slug: "yoshule",
    title: "Yoshule",
    summary:
      "A school operations platform that brings admissions, fees, payroll, timetabling, and assessment into one working system.",
    problem:
      "School staff need operational information to stay connected across admissions, finance, scheduling, and assessment instead of fragmenting the work across unrelated tools.",
    audience: "Administrators and staff at Ugandan schools.",
    ownership:
      "Built and deployed user-facing workflows across the interface and the services behind them. The public case study stays at product level because private implementation details are not published.",
    status: "Live system",
    date: "Live · checked September 2026",
    externalUrl: "https://yoshule.com",
    screenshot: "/projects/yoshule.png",
    screenshotAlt:
      "Yoshule public homepage describing admissions, fees, payroll, timetabling, and assessment tools for schools",
    technologies: ["Web application", "APIs", "Data workflows", "Deployment"],
    architecture: [
      { label: "Staff workspace", detail: "Role-specific school operations" },
      { label: "Application workflows", detail: "Admissions, finance, scheduling, assessment" },
      { label: "Shared records", detail: "A connected operational record" },
    ],
    constraints: [
      "Keep several school workflows legible inside one product.",
      "Support different staff responsibilities without duplicating records.",
      "Protect private school and student information in public documentation.",
    ],
    diagnosis:
      "The public evidence proves the product surface and deployment, not private incident history. A future technical note can add a sanitized failure narrative without exposing school data.",
    verification: [
      { measure: "Public endpoint", result: "HTTP 200", source: "Live check · Sep 2026" },
      { measure: "Product scope", result: "Five named school workflows", source: "Public metadata" },
      { measure: "Evidence boundary", result: "No private records shown", source: "Portfolio review" },
    ],
    nextVersion:
      "Add a sanitized technical note showing one workflow end to end, including a failure case and the checks used before release.",
    aiUse: commonAiUse,
    evidence: [
      { type: "interface", label: "Public interface", detail: "Sanitized live-product view", href: "https://yoshule.com" },
      { type: "architecture", label: "System view", detail: "Public product-level data flow" },
      { type: "deployment", label: "Live deployment", detail: "yoshule.com", href: "https://yoshule.com" },
      { type: "verification", label: "Endpoint check", detail: "Successful response verified September 2026" },
    ],
    verified: true,
    publishReady: true,
    featuredRank: 1,
  },
  {
    slug: "tundamate",
    title: "TundaMate",
    summary:
      "A lightweight inventory and sales system for small businesses that need a practical view of stock and daily activity.",
    problem:
      "Small businesses need to track inventory and sales without taking on the complexity and infrastructure of a large enterprise system.",
    audience: "Small and medium-sized businesses in Uganda.",
    ownership:
      "Built and deployed product workflows spanning the responsive interface, application services, and data layer.",
    status: "Live system",
    date: "Live · checked September 2026",
    externalUrl: "https://tundamate.xyz",
    screenshot: "/projects/tundamate.png",
    screenshotAlt: "TundaMate public homepage for inventory and sales management",
    technologies: ["Next.js", "FastAPI", "TypeScript", "PostgreSQL"],
    architecture: [
      { label: "Business owner", detail: "Responsive inventory and sales workspace" },
      { label: "Application API", detail: "Business rules and workflow coordination" },
      { label: "Business data", detail: "Products, stock movement, and sales records" },
    ],
    constraints: [
      "Keep everyday actions quick on a phone-sized screen.",
      "Avoid enterprise complexity for small teams.",
      "Keep production data and credentials out of the public case study.",
    ],
    diagnosis:
      "The case study verifies the live interface and public product promise. Internal incident details remain private until a sanitized engineering note is available.",
    verification: [
      { measure: "Public endpoint", result: "HTTP 200", source: "Live check · Sep 2026" },
      { measure: "Primary workflow", result: "Inventory and sales", source: "Public metadata" },
      { measure: "Public data exposure", result: "None used", source: "Portfolio review" },
    ],
    nextVersion:
      "Publish a focused workflow walkthrough with explicit test cases for stock changes, invalid inputs, and interrupted requests.",
    aiUse: commonAiUse,
    evidence: [
      { type: "interface", label: "Public interface", detail: "Sanitized live-product view", href: "https://tundamate.xyz" },
      { type: "architecture", label: "System view", detail: "Interface, API, and data flow" },
      { type: "deployment", label: "Live deployment", detail: "tundamate.xyz", href: "https://tundamate.xyz" },
      { type: "verification", label: "Endpoint check", detail: "Successful response verified September 2026" },
    ],
    verified: true,
    publishReady: true,
    featuredRank: 2,
  },
  {
    slug: "qreze",
    title: "Qreze",
    summary:
      "A planning product for setting out the month, recording activity as it happens, and reducing guesswork later.",
    problem:
      "Plans become less useful when the record of what actually happened lives somewhere else or never gets captured.",
    audience: "People who need a clearer monthly plan and an ongoing activity record.",
    ownership:
      "Built and deployed the user-facing application and the workflows that connect planning with ongoing records.",
    status: "Live system",
    date: "Live · checked September 2026",
    externalUrl: "https://app.qreze.com",
    screenshot: "/projects/qreze.png",
    screenshotAlt: "Qreze public application screen for monthly planning and activity logging",
    technologies: ["Web application", "Workflow design", "Data storage", "Deployment"],
    architecture: [
      { label: "Monthly plan", detail: "Intent and expected activity" },
      { label: "Ongoing log", detail: "Records captured during the month" },
      { label: "Usable history", detail: "Plan and actual activity in context" },
    ],
    constraints: [
      "Make planning useful without turning data entry into a second job.",
      "Keep the relationship between the plan and the running log clear.",
      "Avoid exposing account or activity data in portfolio evidence.",
    ],
    diagnosis:
      "The public deployment confirms the product is reachable. A later revision should add a sanitized example of a failed or confusing workflow and the change that resolved it.",
    verification: [
      { measure: "Public endpoint", result: "HTTP 200", source: "Live check · Sep 2026" },
      { measure: "Product loop", result: "Plan, log, review", source: "Public metadata" },
      { measure: "Private activity shown", result: "None", source: "Portfolio review" },
    ],
    nextVersion:
      "Add a short, sanitized walkthrough and usability checks for empty, partial, and completed monthly records.",
    aiUse: commonAiUse,
    evidence: [
      { type: "interface", label: "Public interface", detail: "Sanitized live-product view", href: "https://app.qreze.com" },
      { type: "architecture", label: "System view", detail: "Plan-to-log product flow" },
      { type: "deployment", label: "Live deployment", detail: "app.qreze.com", href: "https://app.qreze.com" },
      { type: "verification", label: "Endpoint check", detail: "Successful response verified September 2026" },
    ],
    verified: true,
    publishReady: true,
    featuredRank: 3,
  },
  {
    slug: "itungo",
    title: "Itungo",
    summary: "A practical farm-management platform for livestock records, health, nutrition, and day-to-day operations.",
    problem: "Farm teams need dependable records for animals, health, feed, people, and recurring work.",
    audience: "Livestock farms and their operating teams.",
    ownership: "Built and deployed product workflows across the web application and supporting services.",
    status: "Live system",
    date: "Live · checked September 2026",
    externalUrl: "https://itungo.com",
    screenshot: "/projects/itungo.png",
    screenshotAlt: "Itungo public homepage describing livestock and farm-management workflows",
    technologies: ["Next.js", "Microservices", "PostgreSQL", "Docker"],
    architecture: [
      { label: "Farm team", detail: "Daily operational workflows" },
      { label: "Application services", detail: "Records, permissions, and scheduled work" },
      { label: "Farm history", detail: "Timestamped operational data" },
    ],
    constraints: ["Keep records practical in daily use.", "Support multiple responsibilities.", "Do not expose customer or farm data."],
    diagnosis: "The live deployment and public product documentation are verified; private operational incidents are not published.",
    verification: [
      { measure: "Public endpoint", result: "HTTP 200", source: "Live check · Sep 2026" },
      { measure: "Primary scope", result: "Farm operations", source: "Public product page" },
      { measure: "Private records shown", result: "None", source: "Portfolio review" },
    ],
    nextVersion: "Add a sanitized workflow trace and test note for one operational path.",
    aiUse: commonAiUse,
    evidence: [
      { type: "interface", label: "Public interface", detail: "Sanitized live-product view", href: "https://itungo.com" },
      { type: "architecture", label: "System view", detail: "Public farm-workflow data flow" },
      { type: "deployment", label: "Live deployment", detail: "itungo.com", href: "https://itungo.com" },
      { type: "verification", label: "Endpoint check", detail: "Successful response verified September 2026" },
    ],
    verified: true,
    publishReady: true,
  },
];

validatePublishedProjects(projects);

export const publishedProjects = projects.filter((project) => project.publishReady);

export const featuredProjects = publishedProjects
  .filter((project) => project.featuredRank)
  .sort((a, b) => (a.featuredRank ?? 99) - (b.featuredRank ?? 99))
  .slice(0, 3);

export function getProject(slug: string) {
  return publishedProjects.find((project) => project.slug === slug);
}
