import { existsSync } from "node:fs";
import { resolve } from "node:path";
import type { ProjectCaseStudy } from "../types/content";

const REQUIRED_EVIDENCE = new Set([
  "interface",
  "architecture",
  "deployment",
  "verification",
]);

function containsVerifyMarker(value: unknown): boolean {
  if (typeof value === "string") return value.includes("[VERIFY]");
  if (Array.isArray(value)) return value.some(containsVerifyMarker);
  if (value && typeof value === "object") {
    return Object.values(value).some(containsVerifyMarker);
  }
  return false;
}

export function validatePublishedProjects(projects: ProjectCaseStudy[]) {
  const errors: string[] = [];

  for (const project of projects.filter((item) => item.publishReady)) {
    if (!project.verified) {
      errors.push(`${project.slug}: published projects must be verified`);
    }
    if (containsVerifyMarker(project)) {
      errors.push(`${project.slug}: published content contains [VERIFY]`);
    }

    const evidenceTypes = new Set(project.evidence.map((item) => item.type));
    for (const required of REQUIRED_EVIDENCE) {
      if (!evidenceTypes.has(required as never)) {
        errors.push(`${project.slug}: missing ${required} evidence`);
      }
    }

    if (!project.screenshot.startsWith("/projects/")) {
      errors.push(`${project.slug}: screenshot must be a local project asset`);
    } else {
      const screenshotPath = resolve(
        process.cwd(),
        "public",
        project.screenshot.slice(1),
      );
      if (!existsSync(screenshotPath)) {
        errors.push(`${project.slug}: missing asset ${project.screenshot}`);
      }
    }
  }

  if (errors.length > 0) {
    throw new Error(`Portfolio content validation failed:\n${errors.join("\n")}`);
  }
}
