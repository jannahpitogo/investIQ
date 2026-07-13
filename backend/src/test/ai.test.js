import { test, expect, vi, beforeEach } from 'vitest'

const { mockCreate } = vi.hoisted(() => ({ mockCreate: vi.fn() }))

vi.mock('openai', () => ({
  default: vi.fn().mockImplementation(function () {
    return { chat: { completions: { create: mockCreate } } }
  }),
}))

import { generateSuggestions } from '../generateSuggestions.js'

beforeEach(() => {
  vi.clearAllMocks()
})

const questionnaire = { name: 'Jane Doe', riskProfile: 'Balanced' }
const analysis = { totalPortfolioValue: 240, portfolioChange: 20 }

const validAiResponse = {
  suggestions: [{ title: 'Diversify', type: 'warning', message: 'Consider spreading holdings across more sectors.' }],
}
function mockOpenAiReply(content) {
  mockCreate.mockResolvedValue({
    choices: [{ message: { content } }],
  })
}
