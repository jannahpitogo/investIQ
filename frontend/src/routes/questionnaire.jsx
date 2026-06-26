import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/questionnaire')({
  component: QuestionnairePage,
})

function QuestionnairePage() {
  return (
    <div>
      <h1>Questionnaire</h1>
    </div>
  )
}