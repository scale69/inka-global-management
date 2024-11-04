"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CgMenuRight } from "react-icons/cg";

import { Button } from "@/components/ui/button";
import { DarkModeButton } from "./DarkModeButton";
import { Link } from "@/i18n/routing";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function MobileNav() {
  const data = useTranslations("data");

  const [sheetOpen, setSheetOpen] = useState(false);
  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger asChild>
        <Button variant={"outline"} className="px-2">
          <CgMenuRight size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="w-full">
          <SheetDescription className="flex  gap-5 p-5 py-10 flex-col  w-full ">
            <div className="flex flex-col gap-5 w-full">
              <Button
                asChild
                variant={"outline"}
                className="w-full"
                onClick={() => setSheetOpen(false)}
              >
                <Link href={"/"}>{data("Link.Home")}</Link>
              </Button>
              <Button
                asChild
                variant={"outline"}
                className="w-full"
                onClick={() => setSheetOpen(false)}
              >
                <Link href={"/#layanan"}>{data("Layanan.title")}</Link>
              </Button>
              <Button
                asChild
                variant={"outline"}
                className="w-full"
                onClick={() => setSheetOpen(false)}
              >
                <Link href={"/#profile"}> {data("Link.Profile")}</Link>
              </Button>
              <Button
                asChild
                variant={"outline"}
                className="w-full"
                onClick={() => setSheetOpen(false)}
              >
                <Link href={"/#visimisi"}> {data("Link.VisiMisi")}</Link>
              </Button>
              <Button
                asChild
                variant={"outline"}
                className="w-full"
                onClick={() => setSheetOpen(false)}
              >
                <Link href={"#testimoni"}> {data("Link.Testimoni")}</Link>
              </Button>
              <Button
                asChild
                variant={"outline"}
                className="w-full"
                onClick={() => setSheetOpen(false)}
              >
                <Link href={"/about"}> {data("Link.About")}</Link>
              </Button>
            </div>
            <DarkModeButton />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
