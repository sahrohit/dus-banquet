"use client";

import * as React from "react";
import Link from "next/link";
import { LuCommand } from "react-icons/lu";

import { NAV_LINKS } from "@/config/nav-links";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
  // eslint-disable-next-line react/prop-types
>(({ className, title, children, ...props }, ref) => (
  <li>
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className,
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
));
ListItem.displayName = "ListItem";

const NavMenu = () => (
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger className="text-lg">
          Events
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
            <li className="row-span-3">
              <NavigationMenuLink asChild>
                <Link
                  className="flex size-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  href="/"
                >
                  <LuCommand className="size-6" />
                  <div className="mb-2 mt-4 text-lg font-medium">Weddings</div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    Crafting Unforgettable Moments on Your Special Day
                  </p>
                </Link>
              </NavigationMenuLink>
            </li>
            <ListItem href="/events/aniversary" title="Aniversary">
              Celebrate Love with Elegance and Memorable Experiences
            </ListItem>
            <ListItem href="/events/birthdays" title="Birthdays">
              Create Joyful Memories for Every Milestone Celebration
            </ListItem>
            <ListItem href="/events/office-parties" title="Office Parties">
              Professional Events with a Touch of Fun and Sophistication
            </ListItem>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger className="text-lg">About</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
            {NAV_LINKS.find(
              (component) => component.title === "About",
            )!.links.map((component) => (
              <ListItem
                key={component.label}
                title={component.label}
                href={component.href}
              >
                {component.description}
              </ListItem>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      {/* <NavigationMenuItem>
        <Link href="/events" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Documentation
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem> */}
    </NavigationMenuList>
  </NavigationMenu>
);

export default NavMenu;
