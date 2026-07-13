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

