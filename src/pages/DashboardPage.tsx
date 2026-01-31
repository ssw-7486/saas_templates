import { Navigation } from '../components/ui/Navigation'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'

export function DashboardPage() {
  const stats = {
    totalJobs: '1,247',
    successRate: '98.5%',
    avgTime: '2.3s',
  }

  const customers = [
    { name: 'customer1', jobs: 847, percent: 68 },
    { name: 'customer2', jobs: 258, percent: 21 },
    { name: 'customer3', jobs: 142, percent: 11 },
  ]

  const jobs = [
    {
      id: 1247,
      status: 'completed' as const,
      customer: 'customer1',
      type: 'Invoice OCR',
      time: '2 minutes ago',
    },
    {
      id: 1246,
      status: 'processing' as const,
      customer: 'customer1',
      type: 'Receipt Extract',
      time: '5 minutes ago',
    },
    {
      id: 1245,
      status: 'queued' as const,
      customer: 'customer2',
      type: 'Form Validation',
      time: '10 minutes ago',
    },
  ]

  const recentActivity = [
    { id: 1247, name: 'Invoice #1247' },
    { id: 1246, name: 'Receipt #1246' },
    { id: 1243, name: 'Form #1243' },
  ]

  return (
    <div className="min-h-screen bg-gray-lightest">
      <Navigation />

      <main className="p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-navy-darkest">
            Welcome, Administrator
          </h1>
          <p className="text-navy-dark">
            Here&apos;s what&apos;s happening with your workflows today
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <p className="text-sm text-navy-dark">Total Jobs</p>
            <p className="text-2xl font-bold text-navy-darkest">
              {stats.totalJobs}
            </p>
          </Card>
          <Card>
            <p className="text-sm text-navy-dark">Accuracy Rate</p>
            <p className="text-2xl font-bold text-navy-darkest">
              {stats.successRate}
            </p>
          </Card>
          <Card>
            <p className="text-sm text-navy-dark">Avg Time</p>
            <p className="text-2xl font-bold text-navy-darkest">
              {stats.avgTime}
            </p>
          </Card>
          <Card title="Per-Customer">
            {customers.map((customer) => (
              <div
                key={customer.name}
                className="flex justify-between text-sm"
              >
                <span className="text-navy-dark">{customer.name}</span>
                <span className="font-medium text-navy-darkest">
                  {customer.percent}%
                </span>
              </div>
            ))}
          </Card>
        </div>

        {/* Two-Panel Layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            <Card title="System Health">
              <p className="text-sm text-navy-dark">All Systems OK</p>
              <p className="text-sm text-navy-dark">Queue: 142 jobs</p>
            </Card>
            <Card title="Current Batch">
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-navy-dark">Processing</span>
                <span className="font-medium">12 of 50</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-gray-light">
                <div
                  className="h-full rounded-full bg-primary-medium"
                  style={{ width: '24%' }}
                />
              </div>
              <p className="mt-1 text-xs text-navy-dark">24% complete</p>
            </Card>
            <Card title="Recent Activity">
              <ul className="space-y-2">
                {recentActivity.map((item) => (
                  <li
                    key={item.id}
                    className="text-sm text-navy-darkest"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <Card title="Job List">
            <div className="mb-4 flex flex-wrap gap-2">
              <select className="rounded-md border border-gray-light bg-white px-3 py-2 text-sm text-navy-darkest">
                <option>All Status</option>
                <option>Completed</option>
                <option>Processing</option>
                <option>Queued</option>
              </select>
              <select className="rounded-md border border-gray-light bg-white px-3 py-2 text-sm text-navy-darkest">
                <option>All Customers</option>
                <option>customer1</option>
                <option>customer2</option>
                <option>customer3</option>
              </select>
            </div>
            <ul className="space-y-3">
              {jobs.map((job) => (
                <li
                  key={job.id}
                  className="flex items-center justify-between rounded-md border border-gray-light bg-gray-lightest p-3"
                >
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      className="rounded p-1 hover:bg-gray-light"
                      aria-label="Expand"
                    >
                      ▶
                    </button>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-navy-darkest">
                          Job #{job.id}
                        </span>
                        {job.status === 'completed' && (
                          <Badge variant="success">● Completed</Badge>
                        )}
                        {job.status === 'processing' && (
                          <Badge variant="info">● Processing</Badge>
                        )}
                        {job.status === 'queued' && (
                          <Badge variant="neutral">○ Queued</Badge>
                        )}
                      </div>
                      <p className="text-sm text-navy-dark">
                        {job.customer} | {job.type}
                      </p>
                      <p className="text-xs text-gray-dark">{job.time}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={() => (window.location.href = '/jobs')}
            >
              View All Jobs →
            </Button>
          </Card>
        </div>
      </main>
    </div>
  )
}
