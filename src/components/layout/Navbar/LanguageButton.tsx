

"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoLanguage } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";

export function LanguageButton() {
  const router = useRouter();
  const pathname = usePathname(); // e.g. /en/about
  const segments = pathname.split("/").filter(Boolean); // ["en", "about"]

  const switchLocale = (newLocale: string) => {
    if (segments.length > 0) segments[0] = newLocale; // ganti locale segment pertama
    else segments.unshift(newLocale); // untuk root path
    const newPath = "/" + segments.join("/");
    router.replace(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <IoLanguage size={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => switchLocale("jp")}>
          🇯🇵 日本語
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLocale("id")}>
          🇮🇩 Indonesia
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLocale("en")}>
          🇺🇸 English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
