import * as React from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "@/i18n/routing";
type DataProps = {
  data: (key: string) => string;
};

export function LinkNav({ data }: DataProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Link href={"/#layanan"}>{data("Layanan.title")}</Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px]  lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <ListItem href="/#layanan" title={data("Layanan.title")}>
                {data("Layanan.PengurusanVisa.description")}
              </ListItem>
              <ListItem href="#layanan" title={data("Layanan.Terhubung.title")}>
                {data("Layanan.Terhubung.description")}
              </ListItem>
              <ListItem
                href="#layanan"
                title={data("Layanan.InterpretasiPenerjemah.title")}
              >
                {data("Layanan.InterpretasiPenerjemah.description")}
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href="#profile"
            passHref
            className={navigationMenuTriggerStyle()}
          >
            {data("Link.Profile")}
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href="#visimisi"
            passHref
            className={navigationMenuTriggerStyle()}
          >
            {data("Link.VisiMisi")}
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" passHref className={navigationMenuTriggerStyle()}>
            {data("Link.About")}
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
