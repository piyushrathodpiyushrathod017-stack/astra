import Link from "next/link"
import type { Route } from "next"

export function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="hidden lg:block w-64 shrink-0 border-r border-border bg-muted/30">
        <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto p-6">
          <nav className="space-y-6" aria-label="Documentation">
            <div>
              <h3 className="text-sm font-semibold mb-2">Getting Started</h3>
              <div className="space-y-1">
                <Link href="/docs" className="block px-3 py-1.5 text-sm hover:text-primary transition-colors">
                  Introduction
                </Link>
                <Link href={"/docs/getting-started" as Route} className="block px-3 py-1.5 text-sm hover:text-primary transition-colors">
                  Getting Started
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2">Architecture</h3>
              <div className="space-y-1">
                <Link href={"/docs/architecture" as Route} className="block px-3 py-1.5 text-sm hover:text-primary transition-colors">
                  Architecture
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2">API Reference</h3>
              <div className="space-y-1">
                <Link href={"/docs/api" as Route} className="block px-3 py-1.5 text-sm hover:text-primary transition-colors">
                  API Reference
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2">Contributing</h3>
              <div className="space-y-1">
                <Link href={"/docs/contributing" as Route} className="block px-3 py-1.5 text-sm hover:text-primary transition-colors">
                  Contributing
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </aside>

      <main className="flex-1 min-w-0">
        <div className="max-w-4xl mx-auto px-6 py-10">
          {children}
        </div>
      </main>
    </div>
  )
}
