import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CgMenuRight } from "react-icons/cg";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <CgMenuRight size={20} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetDescription></SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
