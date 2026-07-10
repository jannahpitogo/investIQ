import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/terms-of-service')({
  component: TermsOfService,
})

function TermsOfService() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">
        Terms of Service
      </h1>

      <p className="text-base-content/70 mb-8">
        Last updated: July 2026
      </p>

      <p>
        InvestIQ is provided for educational and informational purposes only.
        Nothing on this platform constitutes financial, investment, legal, or tax
        advice. Nothing on this platform should be considered a recommendation to
        buy, sell, or hold any investment. Users should conduct their own research
        and consult qualified professionals before making investment decisions.
      </p>

      <div className="mt-12">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => window.history.back()}
        >
          ← Back
        </button>
      </div>
    </main>
  )
}