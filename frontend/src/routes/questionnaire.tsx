import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/questionnaire')({
  component: QuestionnaireLayout,
})

function QuestionnaireLayout() {
  return <Outlet />
}
