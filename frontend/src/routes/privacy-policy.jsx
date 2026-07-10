import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/privacy-policy')({
  component: PrivacyPolicy,
})

function PrivacyPolicy() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">
        Privacy Policy
      </h1>

      <p className="mb-8 text-base-content/70">
        Last updated: July 2026
      </p>

      <section className="space-y-8">

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Overview
          </h2>

          <p>
            InvestIQ is an educational investment analysis platform designed to
            help retail investors better understand their investment portfolio,
            investment risk, diversification, and sustainability preferences.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            What information we collect
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Name (if provided)</li>
            <li>Age</li>
            <li>Investment goals</li>
            <li>Risk profile questionnaire responses</li>
            <li>Portfolio holdings you choose to enter</li>
            <li>Ethical investment preferences</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            How we use your information
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Generate your personalized investment profile.</li>
            <li>Calculate your portfolio risk.</li>
            <li>Provide portfolio diversification insights.</li>
            <li>Display sustainability and values-based analysis.</li>
            <li>Improve the InvestIQ experience.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            How your information is stored
          </h2>

          <p>
            During your session, questionnaire responses may be stored locally in
            your browser so you can continue where you left off.
          </p>

          <p className="mt-3">
            Information submitted through InvestIQ may be securely stored in our backend database to generate your investment profile, portfolio analysis, and dashboard recommendations.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Investment data
          </h2>

          <p>
            InvestIQ currently supports analysis of U.S. stock market investments
            only as part of this MVP release.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Data security
          </h2>

          <p>
            We take reasonable measures to protect the information you provide.
            However, no online system can guarantee absolute security.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Your choices
          </h2>

          <p>
            If you choose not to continue with the questionnaire, you may leave the website at any time without providing your information.
            You may restart your questionnaire at any time, which clears locally
            stored questionnaire responses from your browser.
          </p>
        </div>

      </section>

      <button
        type="button"
        className="btn btn-primary"
        onClick={() => window.history.back()}
      >
        ← Back
      </button>
    </main>
  )
}