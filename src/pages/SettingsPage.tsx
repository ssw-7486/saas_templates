import { Navigation } from '../components/ui/Navigation'

export function SettingsPage() {
  return (
    <div className="min-h-screen bg-gray-lightest">
      <Navigation />
      <main className="p-6">
        <div className="rounded-[var(--radius)] border border-gray-light bg-white p-8">
          <h1 className="text-2xl font-bold text-navy-darkest">Settings</h1>
          <p className="mt-2 text-navy-dark">Settings page coming soon...</p>
        </div>
      </main>
    </div>
  )
}
