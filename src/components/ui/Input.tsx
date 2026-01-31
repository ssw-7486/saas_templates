import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label className="text-sm font-medium text-navy-darkest">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`min-h-[44px] rounded-[var(--radius)] border-2 border-input-border bg-input-section-bg px-4 py-2 text-navy-darkest placeholder:text-gray-dark focus:outline-none focus:ring-2 focus:ring-navy-dark ${className}`.trim()}
          {...props}
        />
        {error && (
          <span className="text-sm text-red-600" role="alert">
            {error}
          </span>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'
