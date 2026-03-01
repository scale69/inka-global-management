
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar/Navbar";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Footer from "@/components/layout/Footer";

export function generateStaticParams() {
  return [{ locale: "id" }, { locale: "en" }, { locale: "jp" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages}>
      <AntdRegistry>
        <Navbar />
        {children}
        <Footer />
      </AntdRegistry>
    </NextIntlClientProvider>
  );
}