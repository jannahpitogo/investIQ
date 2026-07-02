import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it, vi, beforeEach } from 'vitest'
import batch1 from '../routes/questionnaireBatches/batch1'

const navigateMock = vi.fn()
const updateAnswersMock = vi.fn()

vi.mock('@tanstack/react-router', async () => {
  const actual = await vi.importActual('@tanstack/react-router')

  return {
    ...actual,
    useNavigate: () => navigateMock,
  }
})

vi.mock('../context/questionnaireContext', () => ({
  useQuestionnaire: () => ({
    answers: {},
    updateAnswers: updateAnswersMock,
  }),
}))

import Batch1 from '../routes/questionnaireBatches/batch1'

describe('Batch 1', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the page', () => {
    render(<Batch1 />)

    expect(screen.getByText('Basic Information')).toBeInTheDocument()
  })

  it('disables Next button initially', () => {
    render(<Batch1 />)

    expect(screen.getByRole('button', { name: /Next/i })).toBeDisabled()
  })

  it('shows validation error for invalid age', () => {
    render(<Batch1 />)

    fireEvent.change(screen.getByPlaceholderText(/Enter your age/i), {
      target: { value: '10' },
    })

    expect(screen.getByText(/Please enter a valid age between 18 and 99/i)).toBeInTheDocument()
  })

  it('enables Next after valid input', () => {
    render(<Batch1 />)

    fireEvent.change(screen.getByPlaceholderText(/Alex/i), {
      target: { value: 'John' },
    })

    fireEvent.change(screen.getByPlaceholderText(/Enter your age/i), {
      target: { value: '25' },
    })

    fireEvent.click(screen.getByRole('button', { name: 'Student' }))

    expect(screen.getByRole('button', { name: /Next/i })).toBeEnabled()
  })
})
