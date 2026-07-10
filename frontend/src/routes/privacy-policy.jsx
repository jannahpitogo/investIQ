import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/privacy-policy')({
  component: PrivacyPolicy,
})

function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <Link
        to="/"
        className="text-blue-600 hover:underline"
      >
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-bold mt-8 mb-6">
        Privacy Policy
      </h1>

      <p>This page is under construction.</p>
    </main>
  )
}