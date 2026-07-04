import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard')({
  component: DashboardPage,
})

function DashboardPage() {
  return (
    <div>
      <h1>ℹ️ Dashboard</h1>
      <p>
        This project was scaffolded with <strong>create-migracode-app</strong>.
      </p>
    </div>
  )
}
