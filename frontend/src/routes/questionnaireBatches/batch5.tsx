import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/questionnaireBatches/batch5')({
  component: Batch5,
})

function Batch5() {
  return <div>Batch 5</div>
}