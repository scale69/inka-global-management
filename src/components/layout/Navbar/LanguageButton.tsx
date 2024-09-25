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
import { usePathname, useRouter } from "@/i18n/routing";

export function LanguageButton() {
  const pathname: string = usePathname();
  const router = useRouter();

  const handelChange = () => {};
  console.log(handelChange);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <IoLanguage size={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => router.replace(pathname, { locale: "jp" })}
        >
          🇯🇵 日本語
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => router.replace(pathname, { locale: "id" })}
        >
          <span>🇮🇩 Indonesia</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => router.replace(pathname, { locale: "en" })}
        >
          <span>🇺🇸 English</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
