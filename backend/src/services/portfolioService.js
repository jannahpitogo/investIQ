export function analysePortfolio(questionnaire) {
  const portfolio = questionnaire.portfolio ?? []

  let totalInvestment = 0
  let totalShares = 0

  const holdings = portfolio.map((stock) => {
    const quantity = Number(stock.quantity)
    const buyPrice = Number(stock.buyPrice)

    const investment = quantity * buyPrice

    totalInvestment += investment
    totalShares += quantity

    return {
      ticker: stock.ticker,
      name: stock.name,
      quantity,
      buyPrice,
      investment,
    }
  })

  return {
    totalInvestment,
    totalShares,
    numberOfHoldings: holdings.length,
    holdings,
  }
}