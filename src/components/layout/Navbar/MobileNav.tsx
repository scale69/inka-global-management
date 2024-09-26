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
type DataProps = {
  data: (key: string) => string;
};

export default function MobileNav({ data }: DataProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"outline"} className="px-2">
          <CgMenuRight size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="w-full">
          <SheetDescription className="flex  gap-5 p-5 py-10 flex-col  w-full ">
            <div className="flex flex-col gap-5 w-full">
              <Button asChild variant={"outline"} className="w-full">
                <Link href={"#"}>{data("Layanan.title")}</Link>
              </Button>
              <Button asChild variant={"outline"} className="w-full">
                <Link href={"#"}> {data("Link.Profile")}</Link>
              </Button>
              <Button asChild variant={"outline"} className="w-full">
                <Link href={"#"}> {data("Link.VisiMisi")}</Link>
              </Button>
              <Button asChild variant={"outline"} className="w-full">
                <Link href={"#"}> {data("Link.Testimoni")}</Link>
              </Button>
              <Button asChild variant={"outline"} className="w-full">
                <Link href={"#"}> {data("Link.About")}</Link>
              </Button>
            </div>
            <DarkModeButton />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
