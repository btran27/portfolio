"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Separator } from "./ui/separator";

export function TopBar() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures this runs only on the client side
  }, []);

  const handleBackToTop = () => {
    if (isClient && window.location.pathname !== "/") {
      window.location.href = "/";
      return;
    }
    if (isClient) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleScrollTo = (id: string) => {
    if (isClient && window.location.pathname !== "/") {
      window.location.href = "/";
    }
    if (isClient) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="fixed left-0 top-0 bg-secondary w-dvw h-16 shadow-lg border-b-2 px-6 flex justify-between items-center">
      <h1>Brian Tran</h1>
      <NavigationMenu className="mr-20">
        <NavigationMenuList className="gap-6">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-50">
                {isClient && window.location.pathname !== "/" ? (
                  <NavigationMenuLink onClick={() => handleBackToTop()}>
                    Home
                  </NavigationMenuLink>
                ) : (
                  <NavigationMenuLink onClick={() => handleBackToTop()}>
                    Back to Top
                  </NavigationMenuLink>
                )}
                <Separator />
                <NavigationMenuLink onClick={() => handleScrollTo("projects")}>
                  Projects
                </NavigationMenuLink>
                <NavigationMenuLink onClick={() => handleScrollTo("about_me")}>
                  About Me
                </NavigationMenuLink>
                <NavigationMenuLink onClick={() => handleScrollTo("contact")}>
                  Contact Me
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/gallery" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Gallery
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              legacyBehavior
              passHref
            >
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                target="_blank"
              >
                Résumé
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
