import { createFileRoute, useNavigate } from '@tanstack/react-router'

export const Route = createFileRoute('/questionnaire')({
  component: QuestionnairePage,
})

function QuestionnairePage() {
  const navigate = useNavigate()

  return (
    <div className="max-w-lg mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-4">
        Let's understand your portfolio better
      </h1>

      <p className="text-base-content/70 mb-8">
        Answer a few quick questions about your investment goals, risk
        preferences, and portfolio. We'll use your responses to provide
        personalized insights and help you better understand your investments.
      </p>
      
      <p className="text-sm text-base-content/50 mb-1">
        5 short steps • approximately 5–7 minutes
      </p>
      <p className="text-sm text-base-content/50 mb-8">
        No advanced investing knowledge required — we'll guide you through every step.
      </p>

      <button
        className="btn btn-primary w-full"
        onClick={() => navigate({ to: '/questionnaireBatches/batch1' })}
      >
        Get Started
      </button>
    </div>
  )
}