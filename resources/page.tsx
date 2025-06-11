import { Search } from "lucide-react"
import PublicationsList from "@/components/publications-list"
import SiteHeader from "@/components/site-header"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Publications</h1>

        <div className="flex flex-col sm:flex-row gap-2 justify-center mb-8 max-w-3xl mx-auto">
          <div className="relative flex-grow">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search..."
              className="w-full rounded-md border border-input bg-background px-9 py-2"
            />
          </div>
          <select className="rounded-md border border-input bg-background px-3 py-2">
            <option>Type</option>
            <option>Journal</option>
            <option>Conference</option>
            <option>Preprint</option>
          </select>
          <select className="rounded-md border border-input bg-background px-3 py-2">
            <option>Date</option>
            <option>Newest</option>
            <option>Oldest</option>
          </select>
        </div>

        <PublicationsList />
      </main>
    </div>
  )
}
