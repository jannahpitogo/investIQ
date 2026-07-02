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

vi.mock('../data/stocks', () => ({
  US_STOCKS: [],
}))

import Batch5 from '../routes/questionnaireBatches/batch5'

describe('Batch 5', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the portfolio page', () => {
    render(<Batch5 />)

    expect(screen.getByText('Your Portfolio')).toBeInTheDocument()
  })

  it('renders the stock search input', () => {
    render(<Batch5 />)

    expect(screen.getByPlaceholderText(/Apple, AAPL, Tesla/i)).toBeInTheDocument()
  })

  it('renders the View My Insights button', () => {
    render(<Batch5 />)

    expect(
      screen.getByRole('button', {
        name: /View My Insights/i,
      }),
    ).toBeInTheDocument()
  })

  it('submits the portfolio', () => {
    render(<Batch5 />)

    fireEvent.click(
      screen.getByRole('button', {
        name: /View My Insights/i,
      }),
    )

    expect(updateAnswersMock).toHaveBeenCalled()
    expect(navigateMock).toHaveBeenCalledWith({
      to: '/',
    })
  })
})
