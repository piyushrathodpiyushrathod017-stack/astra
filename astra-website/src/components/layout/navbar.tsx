"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AstraLogo } from "@/components/shared/astra-logo";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { CommandPalette } from "@/components/shared/command-palette";
import { navigationConfig } from "@/config/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const navLinks = nav.querySelector("[data-nav-links]");
    if (!navLinks) return;

    const links = navLinks.querySelectorAll("a");
    gsap.set(links, { opacity: 0, y: -8 });
    gsap.to(links, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.06,
      ease: "power2.out",
      delay: 0.3,
    });
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-500 ease-out",
          scrolled
            ? "border-b border-astra-primary/10 bg-background/85 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.12)]"
            : "border-b border-transparent bg-background/60 backdrop-blur-sm"
        )}
      >
        <nav
          ref={navRef}
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        >
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
              <AstraLogo className="h-8 w-auto" />
              <span className="hidden text-lg font-bold sm:inline-block tracking-tight">
                ASTRA
              </span>
            </Link>

            <div
              data-nav-links
              className="hidden items-center gap-1 md:flex"
            >
              {navigationConfig.main.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
                    "hover:text-foreground hover:bg-accent/60",
                    "after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:rounded-full after:transition-all after:duration-300",
                    pathname === item.href || pathname.startsWith(item.href + "/")
                      ? "text-foreground bg-accent/40 after:bg-astra-primary"
                      : "text-muted-foreground after:scale-x-0 hover:after:scale-x-100"
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hidden sm:flex items-center gap-2"
              onClick={() => setCommandOpen(true)}
            >
              <Search className="h-4 w-4" />
              <span className="text-xs">Search...</span>
              <kbd className="hidden lg:inline-flex">⌘K</kbd>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground sm:hidden"
              onClick={() => setCommandOpen(true)}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>

            <ThemeToggle />

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                render={
                  <Button variant="ghost" size="icon" className="md:hidden" />
                }
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-4">
                  <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={() => setOpen(false)}
                  >
                    <AstraLogo className="h-8 w-auto" />
                    <span className="text-lg font-bold">ASTRA</span>
                  </Link>
                  <div className="flex flex-col gap-1">
                    {navigationConfig.main.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 hover:bg-accent/60",
                          pathname === item.href ||
                            pathname.startsWith(item.href + "/")
                            ? "bg-accent/50 text-foreground"
                            : "text-muted-foreground"
                        )}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>
      <CommandPalette open={commandOpen} onOpenChange={setCommandOpen} />
    </>
  );
}
