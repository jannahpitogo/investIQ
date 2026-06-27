import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import { useQuestionnaire } from '../../context/questionnaireContext'

export const Route = createFileRoute('/questionnaireBatches/batch4')({
  component: Batch4,
})

const causeOptions = [
  'Clean energy & environment',
  'Technology & innovation',
  'Healthcare & wellness',
  'Social equality & community',
  'Education & opportunity',
  'Human Rights',
]

const exclusionOptions = [
  'Tobacco & alcohol',
  'Gambling',
  'Weapons & defense',
  'Fossil fuels (oil, gas, coal)',
  'Fast fashion & low-wage labor',
  'None — I have no restrictions',
]

function Batch4() {
  const navigate = useNavigate()
  const { answers, updateAnswers } = useQuestionnaire()

  const [causes, setCauses] = useState<string[]>(answers.causes ?? [])
  const [exclusions, setExclusions] = useState<string[]>(answers.exclusions ?? [])

  function toggleCause(option: string) {
    if (causes.includes(option)) {
      setCauses(causes.filter((c) => c !== option))
    } else if (causes.length < 5) {
      setCauses([...causes, option])
    }
  }

  function toggleExclusion(option: string) {
    if (option === 'None — I have no restrictions') {
      setExclusions(['None — I have no restrictions'])
    } else {
      const withoutNone = exclusions.filter((e) => e !== 'None — I have no restrictions')
      if (withoutNone.includes(option)) {
        setExclusions(withoutNone.filter((e) => e !== option))
      } else {
        setExclusions([...withoutNone, option])
      }
    }
  }

  const canProceed = causes.length > 0 && exclusions.length > 0

  function handleSubmit() {
    updateAnswers({ causes, exclusions })
    navigate({ to: '/questionnaireBatches/batch5' })
  }

  return (
    <div className="max-w-lg mx-auto py-12 px-6">
      <p className="text-sm text-base-content/50 mb-1">Investment Values</p>
      <p className="text-sm text-base-content/50 mb-4">Questions 11–12 of 2</p>
      <progress className="progress progress-primary w-full mb-8" value={90} max={100} />

      {/* Q11 */}
      <div className="mb-6">
        <label className="block font-medium mb-1">
          11. Are there any causes or themes you want your investments to support?
        </label>
        <p className="text-sm text-base-content/50 mb-3">Choose up to 5</p>
        <div className="flex flex-wrap gap-2">
          {causeOptions.map((option) => {
            const isSelected = causes.includes(option)
            const isDisabled = !isSelected && causes.length >= 5
            return (
              <button
                key={option}
                type="button"
                onClick={() => toggleCause(option)}
                disabled={isDisabled}
                className={`px-4 py-2 rounded border-2 text-sm cursor-pointer transition-all
                  ${
                    isSelected
                      ? 'border-primary bg-primary/20 text-primary font-semibold'
                      : isDisabled
                        ? 'border-base-300 opacity-40 cursor-not-allowed'
                        : 'border-base-300 hover:border-primary/50'
                  }`}
              >
                {option}
              </button>
            )
          })}
        </div>
      </div>

      {/* Q12 */}
      <div className="mb-8">
        <label className="block font-medium mb-3">
          12. Are there any industries you would prefer to avoid investing in?
        </label>
        <div className="flex flex-wrap gap-2">
          {exclusionOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => toggleExclusion(option)}
              className={`px-4 py-2 rounded border-2 text-sm cursor-pointer transition-all
                ${
                  exclusions.includes(option)
                    ? 'border-primary bg-primary/10 text-primary font-semibold'
                    : 'border-base-300 hover:border-primary/50'
                }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <button className="btn btn-primary w-full" disabled={!canProceed} onClick={handleSubmit}>
        View My Insights →
      </button>
    </div>
  )
}
