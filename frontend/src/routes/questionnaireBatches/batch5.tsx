import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import { useQuestionnaire } from '../../context/questionnaireContext'
import { US_STOCKS } from '../../data/stocks'

export const Route = createFileRoute('/questionnaireBatches/batch5')({
  component: Batch5,
})

interface PortfolioRow {
  id: string
  ticker: string
  name: string
  industry: string
  quantity: string
  currentPrice: number
}

function Batch5() {
  const navigate = useNavigate()
  const { answers, updateAnswers } = useQuestionnaire()

  const [query, setQuery] = useState('')
  const [rows, setRows] = useState<PortfolioRow[]>(answers.portfolio ?? [])

  const suggestions =
    query.trim().length >= 1
      ? US_STOCKS.filter(
          (s) =>
            !rows.find((r) => r.ticker === s.ticker) &&
            (s.ticker.toLowerCase().includes(query.toLowerCase()) ||
              s.name.toLowerCase().includes(query.toLowerCase())),
        ).slice(0, 6)
      : []

  function addStock(stock: (typeof US_STOCKS)[number]) {
    setRows((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        ticker: stock.ticker,
        name: stock.name,
        industry: stock.industry,
        quantity: '',
        currentPrice: stock.currentPrice,
      },
    ])
    setQuery('')
  }

  function updateQuantity(id: string, value: string) {
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, quantity: value } : r)))
  }

  function removeRow(id: string) {
    setRows((prev) => prev.filter((r) => r.id !== id))
  }

  function handleAddAnother() {
    setQuery('')
    document.getElementById('stock-search')?.focus()
  }

  function handleFinish() {
    updateAnswers({ portfolio: rows })
    navigate({ to: '/' }) // update when insights page is ready
  }

  const canProceed =
    rows.length > 0 && rows.every((r) => r.quantity !== '' && Number(r.quantity) > 0)

  return (
    <div className="max-w-2xl mx-auto py-12 px-6">
      <p className="text-sm text-base-content/50 mb-1">Your Portfolio</p>
      <p className="text-sm text-base-content/50 mb-4">Step 5 of 5</p>
      <progress className="progress progress-primary w-full mb-8" value={100} max={100} />

      <h2 className="text-xl font-bold mb-2">What investments do you currently hold?</h2>
      <p className="text-sm text-base-content/60 mb-6">
        Search for each stock and enter the quantity you hold. Market value is calculated
        automatically.
      </p>

      {/* Search box */}
      <div className="relative mb-8">
        <label className="block font-medium mb-2" htmlFor="stock-search">
          Search for a stock
        </label>
        <input
          id="stock-search"
          type="text"
          className="input input-bordered border-2 w-full"
          placeholder="e.g. Apple, AAPL, Tesla..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {suggestions.length > 0 && (
          <ul className="w-full bg-base-100 border-2 border-base-300 rounded-lg mt-1 shadow-lg">
            {suggestions.map((s) => (
              <li key={s.ticker}>
                <button
                  type="button"
                  className="w-full text-left px-4 py-3 hover:bg-base-200 transition-colors"
                  onClick={() => addStock(s)}
                >
                  <span className="font-semibold">{s.ticker}</span>
                  <span className="text-sm text-base-content/60 ml-2">{s.name}</span>
                  <span className="text-xs text-base-content/40 ml-2">— {s.industry}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Table */}
      {rows.length > 0 && (
        <div className="overflow-x-auto mb-6 border border-base-300 rounded-lg">
          <table className="table w-full">
            <thead className="bg-base-200 text-center text-base-content/60">
              <tr>
                <th>Asset Name</th>
                <th>Type</th>
                <th className="text-center">Quantity</th> <th>Market Value (USD)</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => {
                const qty = Number(row.quantity)
                const marketValue = qty > 0 ? `$${(row.currentPrice * qty).toFixed(2)}` : '—'
                return (
                  <tr key={row.id} className="border-t border-base-200">
                    <td>
                      <p className="font-semibold text-sm">{row.name}</p>
                      <p className="text-xs text-base-content/50">{row.ticker}</p>
                    </td>
                    <td className="text-center">Stock</td>
                    <td>
                      <td className="text-center">
                        <input
                          type="number"
                          min={1}
                          className="input input-bordered input-sm w-24"
                          placeholder="e.g. 10"
                          value={row.quantity}
                          onChange={(e) => updateQuantity(row.id, e.target.value)}
                        />
                      </td>
                    </td>
                    <td className="text-sm font-medium">{marketValue}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-ghost btn-sm text-error"
                        onClick={() => removeRow(row.id)}
                        aria-label="Remove"
                      >
                        🗑
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Buttons */}
      <div className="flex flex-col gap-3 mt-4">
        <button
          type="button"
          className="btn btn-outline btn-primary w-full"
          onClick={handleAddAnother}
        >
          + Add Another Investment
        </button>
        <button className="btn btn-primary w-full" disabled={!canProceed} onClick={handleFinish}>
          View My Insights
        </button>
      </div>
    </div>
  )
}
