import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layout/Navbar/Navbar";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "IGM",
  description: "Berangkat Ke jepang",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html className="scroll-smooth" lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F1F4F5] dark:bg-[#121212] `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <AntdRegistry>
              <Navbar />
              {children}
            </AntdRegistry>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
