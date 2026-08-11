import Link from "next/link";
import { AstraLogo } from "@/components/shared/astra-logo";
import { navigationConfig } from "@/config/navigation";
import { siteConfig } from "@/config/site";

function FooterSection({
  title,
  links,
}: {
  title: string;
  links: readonly { title: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-semibold text-foreground tracking-wide">{title}</h3>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href as never}
              className="text-sm text-muted-foreground transition-colors duration-200 hover:text-astra-primary"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <AstraLogo className="h-8 w-auto" />
              <span className="text-lg font-bold tracking-tight">ASTRA</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground leading-relaxed">
              The intelligent AI ecosystem. Discover, compare, and understand
              AI tools and technologies.
            </p>
            <div className="mt-4 space-y-1">
              <p className="text-xs text-muted-foreground">
                <span className="font-medium text-foreground/80">Founder:</span> {siteConfig.founder}
              </p>
              <p className="text-xs text-muted-foreground">
                <span className="font-medium text-foreground/80">Phone:</span>{" "}
                <a href={`tel:${siteConfig.phone}`} className="hover:text-astra-primary transition-colors">
                  {siteConfig.phone}
                </a>
              </p>
            </div>
          </div>

          <FooterSection
            title="ASTRA"
            links={navigationConfig.footer.astra}
          />
          <FooterSection
            title="AI Ecosystem"
            links={navigationConfig.footer.ecosystem}
          />
          <FooterSection
            title="Knowledge"
            links={navigationConfig.footer.knowledge}
          />
          <FooterSection
            title="Developers"
            links={navigationConfig.footer.developers}
          />
        </div>

        <div className="mt-8 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
              reserved.
            </p>
            <div className="flex gap-4">
              {navigationConfig.footer.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href as never}
                  className="text-sm text-muted-foreground transition-colors duration-200 hover:text-astra-primary"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
