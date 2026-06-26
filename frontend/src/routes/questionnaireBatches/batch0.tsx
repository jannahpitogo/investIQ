import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/questionnaireBatches/batch0')({
  component: Batch0,
})

function Batch0() {
  return <div>Batch 0 - Intro</div>
}