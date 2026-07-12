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
