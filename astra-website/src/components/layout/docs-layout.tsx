import Link from "next/link"
import type { Route } from "next"

export function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <aside className="hidden lg:block w-64 shrink-0 border-r border-border bg-muted/30">
        <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold mb-2">Getting Started</h3>
              <nav className="space-y-1">
                <Link href="/docs" className="block px-3 py-1.5 text-sm hover:text-primary transition-colors">
                  Introduction
                </Link>
                <Link href={"/docs/getting-started/quick-start" as Route} className="block px-3 py-1.5 text-sm hover:text-primary transition-colors">
                  Quick Start
                </Link>
                <Link href={"/docs/getting-started/installation" as Route} className="block px-3 py-1.5 text-sm hover:text-primary transition-colors">
                  Installation
                </Link>
                <Link href={"/docs/getting-started/configuration" as Route} className="block px-3 py-1.5 text-sm hover:text-primary transition-colors">
                  Configuration
                </Link>
              </nav>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2">ASTRA</h3>
              <nav className="space-y-1">
                <Link href={"/docs/astra/core-concepts" as Route} className="block px-3 py-1.5 text-sm hover:text-primary transition-colors">
                  Core Concepts
                </Link>
                <Link href={"/docs/astra/modules" as Route} className="block px-3 py-1.5 text-sm hover:text-primary transition-colors">
                  Modules
                </Link>
                <Link href={"/docs/astra/memory" as Route} className="block px-3 py-1.5 text-sm hover:text-primary transition-colors">
                  Memory
                </Link>
              </nav>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2">Atlas</h3>
              <nav className="space-y-1">
                <Link href={"/docs/atlas/coding" as Route} className="block px-3 py-1.5 text-sm hover:text-primary transition-colors">
                  Coding
                </Link>
                <Link href={"/docs/atlas/local-ai" as Route} className="block px-3 py-1.5 text-sm hover:text-primary transition-colors">
                  Local AI
                </Link>
              </nav>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2">API Reference</h3>
              <nav className="space-y-1">
                <Link href={"/docs/api/rest" as Route} className="block px-3 py-1.5 text-sm hover:text-primary transition-colors">
                  REST API
                </Link>
                <Link href={"/docs/api/graphql" as Route} className="block px-3 py-1.5 text-sm hover:text-primary transition-colors">
                  GraphQL
                </Link>
                <Link href={"/docs/api/websockets" as Route} className="block px-3 py-1.5 text-sm hover:text-primary transition-colors">
                  WebSockets
                </Link>
                <Link href={"/docs/api/sdk" as Route} className="block px-3 py-1.5 text-sm hover:text-primary transition-colors">
                  SDK
                </Link>
              </nav>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2">Advanced</h3>
              <nav className="space-y-1">
                <Link href={"/docs/advanced/deployment" as Route} className="block px-3 py-1.5 text-sm hover:text-primary transition-colors">
                  Deployment
                </Link>
                <Link href={"/docs/advanced/performance" as Route} className="block px-3 py-1.5 text-sm hover:text-primary transition-colors">
                  Performance
                </Link>
                <Link href={"/docs/advanced/security" as Route} className="block px-3 py-1.5 text-sm hover:text-primary transition-colors">
                  Security
                </Link>
              </nav>
            </div>
          </div>
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
