import { MetadataRoute } from "next";

// Base URL produksi
const BASE_URL = "https://inkaglobalmanagement.com";

// Daftar semua locale yang didukung
const locales = ["id", "en", "jp"] as const;

// Daftar semua halaman (path relatif tanpa locale)
const pages: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}[] = [
        {
            path: "",         // Home page  →  /id, /en, /jp
            priority: 1.0,
            changeFrequency: "weekly",
        },
        {
            path: "/about",   // About      →  /id/about, /en/about, /jp/about
            priority: 0.8,
            changeFrequency: "monthly",
        },
        {
            path: "/visa",    // Visa       →  /id/visa, /en/visa, /jp/visa
            priority: 0.8,
            changeFrequency: "monthly",
        },
    ];

export default function sitemap(): MetadataRoute.Sitemap {
    const entries: MetadataRoute.Sitemap = [];

    for (const page of pages) {
        for (const locale of locales) {
            entries.push({
                url: `${BASE_URL}/${locale}${page.path}`,
                lastModified: new Date(),
                changeFrequency: page.changeFrequency,
                priority: page.priority,
            });
        }
    }

    return entries;
}
