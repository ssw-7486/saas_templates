import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'

export function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    navigate('/dashboard')
  }

  const handleSSOLogin = () => {
    navigate('/dashboard')
  }

  return (
    <div className="flex min-h-screen">
      {/* Left Panel - Brand Section (40%) */}
      <div className="flex w-[40%] flex-col justify-between bg-navy-darkest p-12 text-white">
        <div>
          <h1 className="text-3xl font-bold">App</h1>
          <p className="mt-2 text-primary-light">Making Data Management Simple</p>
        </div>
        <ul className="space-y-6">
          <li className="flex gap-3">
            <span className="text-green">✓</span>
            <div>
              <strong>Feature One</strong>
              <p className="text-sm text-primary-lighter">
                Short description of the first feature.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-green">✓</span>
            <div>
              <strong>Feature Two</strong>
              <p className="text-sm text-primary-lighter">
                Short description of the second feature.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-green">✓</span>
            <div>
              <strong>Feature Three</strong>
              <p className="text-sm text-primary-lighter">
                Short description of the third feature.
              </p>
            </div>
          </li>
        </ul>
        <p className="text-sm text-primary-lighter">Template v1.0</p>
      </div>

      {/* Right Panel - Login Form (60%) */}
      <div className="flex w-[60%] flex-col justify-center bg-gray-lightest px-16">
        <div className="mx-auto w-full max-w-md">
          <h2 className="text-2xl font-bold text-navy-darkest">Welcome Back</h2>
          <p className="mt-1 text-navy-dark">Sign in to access your dashboard</p>

          <Button
            type="button"
            variant="primary"
            fullWidth
            className="mt-8"
            onClick={handleSSOLogin}
          >
            Sign in with SSO
          </Button>

          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-light" />
            <span className="text-sm text-gray-dark">or</span>
            <div className="h-px flex-1 bg-gray-light" />
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit" variant="secondary" fullWidth>
              Sign In
            </Button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-dark">
            Template demo v1.0
          </p>
        </div>
      </div>
    </div>
  )
}
