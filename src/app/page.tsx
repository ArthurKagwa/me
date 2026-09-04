import { CareerBridge } from "./components/CareerBridge";
import { ContactCta } from "./components/ContactCta";
import { Hero } from "./components/Hero";
import { Principles } from "./components/Principles";
import { SelectedWork } from "./components/SelectedWork";
import { Snapshot } from "./components/Snapshot";
import { publishedProjects } from "./data/projects";
import { siteProfile } from "./lib/site";

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteProfile.name,
    url: siteProfile.canonicalUrl,
    email: `mailto:${siteProfile.email}`,
    homeLocation: { "@type": "Place", name: siteProfile.location },
    sameAs: [siteProfile.github, siteProfile.linkedIn],
    knowsAbout: ["Software engineering", "Embedded systems", "Internet of Things", "Technical support", "Test automation"],
    subjectOf: publishedProjects.map((project) => ({
      "@type": "CreativeWork",
      name: project.title,
      url: `${siteProfile.canonicalUrl}/projects/${project.slug}`,
    })),
  };

  return (
    <div className="page-intro">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }} />
      <Hero />
      <SelectedWork />
      <CareerBridge />
      <Principles />
      <Snapshot />
      <ContactCta />
    </div>
  );
}
