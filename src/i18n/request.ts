import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

// export default getRequestConfig(async ({ locale }) => {
//   if (!routing.locales.includes(locale as "en" | "id" | "jp")) notFound();
//   return {
//     messages: (await import(`../../messages/${locale}.json`)).default,
//   };
// });
//

export default getRequestConfig(async ({ requestLocale }) => {
  // Await the requestLocale Promise
  let locale = await requestLocale;

  // Check if the locale is valid, otherwise use default
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
