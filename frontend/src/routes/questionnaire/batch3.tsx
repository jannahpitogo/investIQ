import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/questionnaire/batch3')({
  component: Batch3,
})

function Batch3() {
  return <div>Batch 3</div>
}