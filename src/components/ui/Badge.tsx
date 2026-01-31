interface BadgeProps {
  variant?: 'success' | 'warning' | 'error' | 'info' | 'neutral'
  children: React.ReactNode
}

export function Badge({ variant = 'neutral', children }: BadgeProps) {
  const variantStyles = {
    success: 'bg-green/10 text-green border border-green/20',
    warning: 'bg-yellow-500/10 text-yellow-700 border border-yellow-500/20',
    error: 'bg-red-500/10 text-red-700 border border-red-500/20',
    info: 'bg-blue/10 text-blue border border-blue/20',
    neutral: 'bg-navy/10 text-navy border border-navy/20',
  }

  return (
    <span
      className={`inline-flex items-center rounded-lg px-3 py-0.5 text-sm font-medium ${variantStyles[variant]}`}
    >
      {children}
    </span>
  )
}
