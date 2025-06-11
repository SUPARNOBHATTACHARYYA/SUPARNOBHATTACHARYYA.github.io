import Link from "next/link"
import { Search } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="text-xl font-bold">Dynamics Data Design Lab</span>
          </Link>
        </div>
        <nav className="flex items-center gap-6">
          <Link href="/news" className="text-sm font-medium transition-colors hover:text-primary">
            News
          </Link>
          <Link href="/research" className="text-sm font-medium transition-colors hover:text-primary">
            Research
          </Link>
          <Link href="/people" className="text-sm font-medium transition-colors hover:text-primary">
            People
          </Link>
          <Link href="/publications" className="text-sm font-medium text-primary transition-colors">
            Publications
          </Link>
          <Link href="/courses" className="text-sm font-medium transition-colors hover:text-primary">
            Courses
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
          <Search className="h-5 w-5" />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
