import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layout/Navbar/Navbar";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Footer from "@/components/layout/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "IGM",
  description:
    "Inka Global Management (IGM) mendukung tenaga kerja Indonesia di Jepang melalui layanan visa, alih kerja, interpretasi, sekolah bahasa, dan travel profesional.",
};

export function generateStaticParams() {
  return [{ locale: "id" }, { locale: "en" }, { locale: "jp" }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;


  const messages = await getMessages({ locale });
  return (
    <html className="scroll-smooth" lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F1F4F5] dark:bg-[#121212]`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="igm-theme"
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <AntdRegistry>
              <Navbar />
              {children}
              <Footer />
            </AntdRegistry>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-9MR8807XVF" />
    </html>
  );
}



// import "./globals.css";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html
//       className="scroll-smooth"
//       lang="en"
//       data-theme="light" // bisa pakai atribut data-theme
//       suppressHydrationWarning
//     >
//       <body>{children}</body>
//     </html>
//   )
// }