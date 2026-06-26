import type { MetadataRoute } from "next";
import { services } from "./site-data";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://jaipurmovers.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/about-us", "/our-services", "/enquiry-form", "/contact-us"];
  const serviceRoutes = services.map((service) => `/our-services/${service.slug}`);

  return [...staticRoutes, ...serviceRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/our-services") ? 0.8 : 0.7,
  }));
}
