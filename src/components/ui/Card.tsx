import { ReactNode } from 'react'

interface CardProps {
  title?: string
  children: ReactNode
  className?: string
}

export function Card({ title, children, className = '' }: CardProps) {
  return (
    <div
      className={`rounded-[var(--radius)] border border-gray-light bg-white p-6 shadow-sm ${className}`.trim()}
    >
      {title && (
        <h3 className="mb-4 text-lg font-semibold text-navy-darkest">{title}</h3>
      )}
      {children}
    </div>
  )
}
