import { Navigation } from '../components/ui/Navigation'

export function DocumentsPage() {
  return (
    <div className="min-h-screen bg-gray-lightest">
      <Navigation />
      <main className="p-6">
        <div className="rounded-[var(--radius)] border border-gray-light bg-white p-8">
          <h1 className="text-2xl font-bold text-navy-darkest">Documents</h1>
          <p className="mt-2 text-navy-dark">
            Document upload and list coming soon...
          </p>
        </div>
      </main>
    </div>
  )
}
