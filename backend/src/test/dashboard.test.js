import { describe, it, expect, test } from 'vitest'


//REMOVE WHEN THERE IS AN ACTUAL FUNCTION IMPLEMENTATION
const totalPortfolioValue = (holdings) => {
	return holdings.reduce((total, holding) => {
		return total + holding.quantity * holding.currentPrice
	}, 0)
}

const totalInvestedValue = (holdings) => {
  return holdings.reduce((total, holding) => {
    return total + holding.quantity * holding.averagePrice
  }, 0)
}

const numberofHoldings = (holdings) => {
  return holdings.length
}

const topHoldingsByValue = (holdings) => {
  let topHoldings = [];

  topHoldings = holdings
	.sort((a, b) => (b.quantity * b.currentPrice) - (a.quantity * a.currentPrice))
	.slice(0, 3)

	return topHoldings; 
}

const sectorExposureBreakdown = (holdings) => {

const totalHoldingValue = totalPortfolioValue(holdings);
  

  const sectorExposure = holdings.reduce((accumulation, holding) => {
	const value = holding.quantity * holding.currentPrice;	
	if (!accumulation[holding.sector]) {
		accumulation[holding.sector] = { value: 0, percentage: 0 };
	}
	accumulation[holding.sector].value += value;
	return accumulation;
  }, {});

  for (const sector in sectorExposure) {
	sectorExposure[sector].percentage = (sectorExposure[sector].value / totalHoldingValue) * 100;
  }

  return sectorExposure;
}


const diversificationScore = (holdings) => {
	const Holdings = numberofHoldings(holdings);
	let scoreOfHoldings; //in for the final
	let concentrationPercentage;
	let concentrationScore; //in for the final
	


	let sectorValues = {
		RetailTrade: 0,
		ConsumerServices: 0,
		ElectronicTechnology: 0,
		EnergyMinerals: 0,
		ProducerManufacturing: 0,
		Utilities: 0,
		ConsumerNonDurables: 0,
		ConsumerDurables: 0,
		TechnologyServices: 0
	}


	//score for number of holdings
	const scoreForHoldings = [
		{min: 1, max: 5, score: 20}, 
		{min: 6, max: 10, score: 50}, 
		{min: 11, max: 20, score: 80}, 
		{min: 21, max: Infinity, score: 100}
	]

	for (const row of scoreForHoldings) {
		if (Holdings >= row.min && Holdings <= row.max) {
			scoreOfHoldings = row.score;
		}
	}

	//score for concentration
	const topHolding = topHoldingsByValue(holdings)[0];
	const totalValue = totalPortfolioValue(holdings);
	const topHoldingValue = topHolding.quantity * topHolding.currentPrice;
	concentrationPercentage = topHoldingValue / totalValue * 100

	const tableForConcentration = [
		{min: 0, max: 10, score:100}, 
		{min: 11, max: 20, score:80},
		{min: 21, max: 30, score:60},
		{min: 31, max: 40, score:40},
		{min: 41, max: Infinity, score:20}
	]

	for (const row of tableForConcentration) {
		if (concentrationPercentage >= row.min && concentrationPercentage <= row.max) {
			concentrationScore = row.score;
		}
	}

	//score for sector diversification
	for (const holding of holdings) {
	switch (holding.sector) {
		case "Retail Trade":
			sectorValues.RetailTrade += holding.quantity * holding.currentPrice;
			break;
		case "Consumer Services":
			sectorValues.ConsumerServices += holding.quantity * holding.currentPrice;
			break;
		case "Electronic Technology":
			sectorValues.ElectronicTechnology += holding.quantity * holding.currentPrice;
			break;
		case "Energy Minerals":
			sectorValues.EnergyMinerals += holding.quantity * holding.currentPrice;
			break;
		case "Producer Manufacturing":
			sectorValues.ProducerManufacturing += holding.quantity * holding.currentPrice;
			break;
		case "Utilities":
			sectorValues.Utilities += holding.quantity * holding.currentPrice;
			break;
		case "Consumer Non-Durables":
			sectorValues.ConsumerNonDurables += holding.quantity * holding.currentPrice;
			break;
		case "Consumer Durables":
			sectorValues.ConsumerDurables += holding.quantity * holding.currentPrice;
			break;
		case "Technology Services":
			sectorValues.TechnologyServices += holding.quantity * holding.currentPrice;
			break;
	}}

	const largestSectorValue = Math.max(...Object.values(sectorValues));
	
	const largestSectorPercentage = (largestSectorValue / totalValue) * 100;

		//score lookup, find lookup in the scoretable.
		const tableForSectorDiversification = [
			{ min: 0, max: 25, score: 100 },
			{ min: 26, max: 40, score: 80 },
			{ min: 41, max: 50, score: 60 },
			{ min: 51, max: 60, score: 40 },
			{ min: 61, max: Infinity, score: 20 }
		]

		let sectorDiversificationScore = 20; // in for the final

		for (const row of tableForSectorDiversification) {
		if ( largestSectorPercentage >= row.min && largestSectorPercentage < row.max ) {
			sectorDiversificationScore = row.score;
			break;
		}
		}

		
		//Calculating the overall and interpretation
		let weightScore = {
		holdings: scoreOfHoldings * 0.25, // 20% weight
		concentration: concentrationScore * 0.40, // 40% weight
		sectorDiversification: sectorDiversificationScore * 0.35 // 35% weight
	}

		//Interpretation Table for weightScore
		const weightScoreTable = [
		{ min: 0, max: 20, interpretation: "Very Concentrated" },
		{ min: 21, max: 40, interpretation: "Poor Diversification" },
		{ min: 41, max: 60, interpretation: "Moderate Diversification" },
		{ min: 61, max: 80, interpretation: "Good Diversification" },
		{ min: 81, max: 100, interpretation: "Excellent Diversification" }
	]

	const finalScore = (weightScore.holdings + weightScore.concentration + weightScore.sectorDiversification);

	for (const row of weightScoreTable) {
		if (finalScore >= row.min && finalScore <= row.max) {
			return row.interpretation;
		}
	}
}

//UP UNTIL HERE



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

		const score = diversificationScore(positions); // to change to function call

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
