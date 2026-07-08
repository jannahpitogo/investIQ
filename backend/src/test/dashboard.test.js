import { describe, it, expect, test } from 'vitest'
import { totalPortfolioValue, totalInvestedValue, numberofHoldings, topHoldingsByValue, sectorExposureBreakdown, diversificationScore } from '../src/services/portfolioService.js'



describe('dashboard logic components', () => {

    test('returns the total portfolio value', () => {
		const positions = [
			{ symbol: 'AAPL', quantity: 10, currentPrice: 215.5 },
			{ symbol: 'MSFT', quantity: 5, currentPrice: 430.2 },
			{ symbol: 'TSLA', quantity: 2, currentPrice: 180.0 },
		]

		const total = totalPortfolioValue(positions);
		expect(total).toBe(4666);
	})

	test('returns the total invested value', () => {
		const positions = [
			{ symbol: 'AAPL', quantity: 10, averagePrice: 200.0 },
			{ symbol: 'MSFT', quantity: 5, averagePrice: 400.0 },
			{ symbol: 'TSLA', quantity: 2, averagePrice: 150.0 },
		]

		const total = totalInvestedValue(positions)
		expect(total).toBe(4300);
	})

	test('returns the number of holdings', () => {
		const positions = [
			{ symbol: 'AAPL', quantity: 10, currentPrice: 215.5 },
			{ symbol: 'MSFT', quantity: 5, currentPrice: 430.2 },
			{ symbol: 'TSLA', quantity: 2, currentPrice: 180.0 },
		]

		const numberOfHoldings = numberofHoldings(positions)
		expect(numberOfHoldings).toBe(3);
	})

	test('returns the top 3 holdings by value', () => {
		const positions = [
			{ symbol: 'AAPL', quantity: 10, currentPrice: 215.5 },
			{ symbol: 'MSFT', quantity: 5, currentPrice: 430.2 },
			{ symbol: 'TSLA', quantity: 2, currentPrice: 180.0 },
			{ symbol: 'GOOGL', quantity: 1, currentPrice: 2800.0 },
			{ symbol: 'AMZN', quantity: 3, currentPrice: 3300.0 },
		]

		const topHoldings = topHoldingsByValue(positions);
 
		expect(topHoldings).toEqual([
			{ symbol: 'AMZN', quantity: 3, currentPrice: 3300.0 },
			{ symbol: 'GOOGL', quantity: 1, currentPrice: 2800.0 },
			{ symbol: 'AAPL', quantity: 10, currentPrice: 215.5 },
		])
	})

	test('returns the sector exposure breakdown, value and percentage', () => {
		const positions = [
			{ symbol: 'AAPL', quantity: 10, currentPrice: 215.5, sector: 'Electronic Technology' },
			{ symbol: 'MSFT', quantity: 5, currentPrice: 430.2, sector: 'Technology Services' },
			{ symbol: 'TSLA', quantity: 2, currentPrice: 180.0, sector: 'Consumer Durables' },
			{ symbol: 'GOOGL', quantity: 1, currentPrice: 2800.0, sector: 'Technology Services' },
			{ symbol: 'AMZN', quantity: 3, currentPrice: 3300.0, sector: 'Retail Trade' },
		]

		const totalHoldingValue = totalPortfolioValue(positions);
		const sectorExposure = sectorExposureBreakdown(positions);

		expect(sectorExposure).toEqual({
			'Electronic Technology': { value: 2155, percentage: (2155 / totalHoldingValue) * 100 },
			'Technology Services': { value: 2151 + 2800, percentage: ((2151 + 2800) / totalHoldingValue) * 100 },
			'Consumer Durables': { value: 360, percentage: (360 / totalHoldingValue) * 100 },
			'Retail Trade': { value: 9900, percentage: (9900 / totalHoldingValue) * 100 },
		});
	});

	test('returns the diversification score', () => {
		const positions = [
			{ symbol: 'AAPL', quantity: 10, currentPrice: 215.5, sector: 'Electronic Technology' },
			{ symbol: 'MSFT', quantity: 5, currentPrice: 430.2, sector: 'Technology Services' },
			{ symbol: 'TSLA', quantity: 2, currentPrice: 180.0, sector: 'Consumer Durables' },
			{ symbol: 'GOOGL', quantity: 1, currentPrice: 2800.0, sector: 'Technology Services' },
			{ symbol: 'AMZN', quantity: 3, currentPrice: 3300.0, sector: 'Retail Trade' },
		]

		const score = diversificationScore(positions); 

		expect(score).toBe("Poor Diversification");
	})

	test('returns the risk assessment interpretation', () => {
		const positions = [
			{ symbol: 'AAPL', quantity: 10, currentPrice: 215.5, sector: 'Electronic Technology' },
			{ symbol: 'MSFT', quantity: 5, currentPrice: 430.2, sector: 'Technology Services' },
			{ symbol: 'TSLA', quantity: 2, currentPrice: 180.0, sector: 'Consumer Durables' },
			{ symbol: 'GOOGL', quantity: 1, currentPrice: 2800.0, sector: 'Technology Services' },
			{ symbol: 'AMZN', quantity: 3, currentPrice: 3300.0, sector: 'Retail Trade' },
		]

		const finalRiskScore = 100; // to change to function call
		
		const tableForRiskAssessmentInterpretation = [
			{ min: 0, max: 39, interpretation: "Low Risk" },
			{ min:40, max: 69, interpretation: "Moderate Risk" },
			{ min: 70, max: 100, interpretation: "High Risk" },
		]

		for (const row of tableForRiskAssessmentInterpretation) {
			if (finalRiskScore >= row.min && finalRiskScore <= row.max) {
				return row.interpretation;
			}
		}
		expect(finalRiskScore).toBe("High Risk");

	})
})
