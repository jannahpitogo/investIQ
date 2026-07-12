import { test, expect, vi, beforeEach } from 'vitest'
import { BOYCOTT_LIST } from '../data/boycottList.js'

import {
  analysePortfolio,
  calculateTotalInvestment,
  calculateTotalPortfolioValue,
  calculatePortfolioChange,
  calculateTopHoldings,
  calculateAssetAllocation,
  calculateSectorExposure,
  calculateDiversification,
  calculateRiskTolerance,
  calculatePortfolioRisk,
  compareRisk,
  analyzeEnvironmentalImpact,
  analyzeSocialImpact,
} from '../services/portfolioService.js'

beforeEach(() => {
  vi.spyOn(console, 'log').mockImplementation(() => {})
})

const stockA = { ticker: 'AAA', name: 'Alpha Inc', quantity: 10, buyPrice: 10, currentPrice: 15, sector: 'Tech', industry: 'Software' }
const stockB = { ticker: 'BBB', name: 'Beta Inc', quantity: 5, buyPrice: 20, currentPrice: 18, sector: 'Finance', industry: 'Banking' }
const basicPortfolio = [stockA, stockB]