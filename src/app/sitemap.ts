import { MetadataRoute } from "next";

// Base URL produksi
const BASE_URL = "https://inkaglobalmanagement.com";

// Daftar semua locale yang didukung
const locales = ["id", "en", "jp"] as const;

// Daftar semua halaman (path relatif tanpa locale)
const pages = [
    {
        path: "",           // Home page  →  /id, /en, /jp
        priority: 1.0,
        changeFrequency: "weekly" as const,
    },
    {
        path: "/about",     // About page →  /id/about, /en/about, /jp/about
        priority: 0.8,
        changeFrequency: "monthly" as const,
    },
    {
        path: "/visa",      // Visa page  →  /id/visa, /en/visa, /jp/visa
        priority: 0.8,
        changeFrequency: "monthly" as const,
    },
];

export default function sitemap(): MetadataRoute.Sitemap {
    const sitemapEntries: MetadataRoute.Sitemap = [];

    for (const page of pages) {
        for (const locale of locales) {
            sitemapEntries.push({
                url: `${BASE_URL}/${locale}${page.path}`,
                lastModified: new Date(),
                changeFrequency: page.changeFrequency,
                priority: page.priority,
                // alternates: canonical & hreflang untuk semua locale
                alternates: {
                    languages: Object.fromEntries(
                        locales.map((l) => [l, `${BASE_URL}/${l}${page.path}`])
                    ),
                },
            });
        }
    }

    return sitemapEntries;
}
