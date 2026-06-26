import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/questionnaireBatches/batch2')({
  component: Batch2,
})

function Batch2() {
  return <div>Batch 2</div>
}