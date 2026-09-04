export type VerificationState = "verified" | "verify";

export type EvidenceType =
  | "interface"
  | "architecture"
  | "deployment"
  | "verification";

export interface EvidenceItem {
  type: EvidenceType;
  label: string;
  detail: string;
  href?: string;
}

export interface ArchitectureNode {
  label: string;
  detail: string;
}

export interface ProjectResult {
  measure: string;
  result: string;
  source: string;
}

export interface ProjectCaseStudy {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  audience: string;
  ownership: string;
  status: "Live system" | "Prototype" | "Building" | "Case study";
  date: string;
  externalUrl: string;
  screenshot: string;
  screenshotAlt: string;
  technologies: string[];
  architecture: ArchitectureNode[];
  constraints: string[];
  diagnosis: string;
  verification: ProjectResult[];
  nextVersion: string;
  aiUse: string;
  evidence: EvidenceItem[];
  verified: boolean;
  publishReady: boolean;
  featuredRank?: number;
}

export interface Experience {
  organization: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  verification: VerificationState;
}

export interface Education {
  institution: string;
  program: string;
  period: string;
  detail: string;
  verification: VerificationState;
}

export interface SiteProfile {
  name: string;
  role: string;
  location: string;
  availability: string;
  email: string;
  github: string;
  linkedIn: string;
  canonicalUrl: string;
}
