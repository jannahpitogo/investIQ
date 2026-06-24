import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/questionnaire/batch1')({
  component: Batch1,
})

function Batch1() {
  return <div>Batch 1</div>
}