import { DarkModeButton } from "./DarkModeButton";
import { LinkNav } from "./LinkNav";
import { LanguageButton } from "./LanguageButton";
import { Link } from "@/i18n/routing";
import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <div className="fixed z-50 justify-between bg-[#F1F4F5] dark:bg-[#121212] items-center w-full py-5 px-10 ">
      <div className="flex justify-between items-center">
        <div>
          <Link
            className="flex flex-col text-green-800 dark:text-white"
            href={"/"}
          >
            <span className="text-4xl font-bold">IGM</span>
            <span className="text-xs italic">Inka Global Management</span>
          </Link>
        </div>
        <div className="hidden md:block">
          <LinkNav />
        </div>
        <div className="flex gap-2 items-center justify-center">
          {/* <div className="hidden md:flex "> */}
          <DarkModeButton />
          {/* </div> */}
          <LanguageButton />
          <MobileNav />
        </div>
      </div>
    </div>
  );
}
