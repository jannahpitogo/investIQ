import { createFileRoute } from '@tanstack/react-router'
import QuestionnaireLayout from '../components/questionnaireLayout'

export const Route = createFileRoute('/terms-of-service')({
  component: TermsOfService,
})

function TermsOfService() {
  return (
    <QuestionnaireLayout>
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="rounded-2xl border border-base-300 bg-base-100 p-8 shadow-lg">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>

          <p className="text-base-content/60 mb-10">
            Last updated: July 2026
          </p>

          <section className="mb-14">
            <h2 className="text-2xl font-bold text-emerald-600 mb-5">
              Educational Purpose
            </h2>

            <p className="text-base-content/60 max-w-2xl mb-8">
              These terms explain the conditions for using InvestIQ and the limitations of the information we provide.
            </p>

            <p className="leading-8 text-base-content/80">
              InvestIQ is an educational platform designed to help users better
              understand investment portfolios and environmental and social
              considerations. It does not provide financial advice.
            </p>
          </section>

          <section className="mb-14">
            <h2 className="text-2xl font-bold text-emerald-600 mb-5">
              No Investment Advice
            </h2>

            <p className="leading-8 text-base-content/80">
              Information provided by InvestIQ should not be considered
              financial, legal, tax, or investment advice. Users remain
              responsible for their own investment decisions.
            </p>
          </section>

          <section className="mb-14">
            <h2 className="text-2xl font-bold text-emerald-600 mb-5">
              Accuracy
            </h2>

            <p className="leading-8 text-base-content/80">
              While we strive to provide accurate portfolio analysis, market
              data, calculations, and educational content, InvestIQ cannot
              guarantee that all information is complete, current, or
              error-free.
            </p>
          </section>

          <section className="mb-14">
            <h2 className="text-2xl font-bold text-emerald-600 mb-5">
              Limitation of Liability
            </h2>

            <p className="leading-8 text-base-content/80">
              InvestIQ and its contributors are not liable for any financial
              losses or damages resulting from the use of this platform or
              reliance on the information it provides.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Acceptance
            </h2>

            <p className="leading-8 text-base-content/80">
              By using InvestIQ, you agree to these Terms of Service and our
              Privacy Policy.
            </p>
          </section>

          <div className="mt-12 pt-6 border-t border-base-300">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => window.history.back()}
            >
              ← Back
            </button>
          </div>
        </div>
      </div>
    </QuestionnaireLayout>
  )
}