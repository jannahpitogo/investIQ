import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/questionnaire/batch4')({
  component: Batch4,
})

function Batch4() {
  return <div>Batch 4</div>
}