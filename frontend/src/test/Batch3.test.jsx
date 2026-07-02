import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it, vi, beforeEach } from 'vitest'

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

import Batch3 from '../routes/questionnaireBatches/batch3'

describe('Batch 3', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the page', () => {
    render(<Batch3 />)

    expect(screen.getByText('Risk Profile')).toBeInTheDocument()
  })

  it('disables Next button initially', () => {
    render(<Batch3 />)

    expect(screen.getByRole('button', { name: /Next/i })).toBeDisabled()
  })

  it('enables Next after answering all questions', () => {
    render(<Batch3 />)

    fireEvent.click(
      screen.getByRole('button', {
        name: /Do nothing and wait for it to recover/i,
      }),
    )

    fireEvent.click(
      screen.getByRole('button', {
        name: /Medium — I can handle moderate ups and downs/i,
      }),
    )

    fireEvent.click(
      screen.getByRole('button', {
        name: /Neutral — I understand it's part of investing/i,
      }),
    )

    fireEvent.click(
      screen.getByRole('button', {
        name: /I want strong growth, and I can handle big swings/i,
      }),
    )

    expect(screen.getByRole('button', { name: /Next/i })).toBeEnabled()
  })

  it('navigates to Batch 4', () => {
    render(<Batch3 />)

    fireEvent.click(
      screen.getByRole('button', {
        name: /Do nothing and wait for it to recover/i,
      }),
    )

    fireEvent.click(
      screen.getByRole('button', {
        name: /Medium — I can handle moderate ups and downs/i,
      }),
    )

    fireEvent.click(
      screen.getByRole('button', {
        name: /Neutral — I understand it's part of investing/i,
      }),
    )

    fireEvent.click(
      screen.getByRole('button', {
        name: /I want strong growth, and I can handle big swings/i,
      }),
    )

    fireEvent.click(screen.getByRole('button', { name: /Next/i }))

    expect(updateAnswersMock).toHaveBeenCalled()
    expect(navigateMock).toHaveBeenCalledWith({
      to: '/questionnaireBatches/batch4',
    })
  })
})
