import type { MetadataRoute } from "next";
import { siteProfile } from "./lib/site";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${siteProfile.canonicalUrl}/sitemap.xml`, host: siteProfile.canonicalUrl };
}
