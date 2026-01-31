import { Link, useLocation } from 'react-router-dom'
import { Button } from './Button'

export function Navigation() {
  const location = useLocation()

  const navLinks = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/workflows', label: 'Workflows' },
    { path: '/jobs', label: 'Jobs' },
    { path: '/documents', label: 'Documents' },
    { path: '/settings', label: 'Settings' },
  ]

  return (
    <header className="flex h-14 items-center justify-between border-b border-gray-light bg-white px-6">
      <div className="flex items-center gap-8">
        <Link to="/dashboard" className="text-xl font-bold text-navy-darkest">
          App
        </Link>
        <nav className="flex gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-blue/10 text-blue'
                    : 'text-navy-dark hover:bg-gray-lightest'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <Button
          type="button"
          variant="primary"
          onClick={() => (window.location.href = '/quick-start')}
        >
          Quick Start
        </Button>
        <button
          type="button"
          className="relative rounded-full p-2 text-navy-dark hover:bg-gray-lightest"
          aria-label="Notifications"
        >
          <span className="text-lg">🔔</span>
        </button>
      </div>
    </header>
  )
}
