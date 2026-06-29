# 📊 InvestIQ

**InvestIQ** is a modern investment tracking platform that helps users build and manage portfolios they believe in. It transforms raw market data into clear, actionable insights - helping users understand performance, risk, and diversification in one unified dashboard.

---

## 💡 What is InvestIQ?

InvestIQ is designed to make investing simple and intelligent.

Instead of just showing raw numbers, it helps users understand their portfolios through:

- 📈 Performance tracking
- 🧾 Allocation breakdowns
- ⚖️ Risk analysis
- 🌱 Diversification insights

The goal is to help users invest with clarity and confidence in what matters to them.

---

## 🚀 Key Features

- 📈 Stock price simulation (**mock data for MVP**)
- 🧾 Portfolio tracking with live-like profit & loss updates
- 📊 Interactive dashboard with portfolio insights
- 🔎 Explore curated U.S. stocks by sector and industry
- 🌱 Thematic investing (tech, energy, defense, etc.)
- ⚖️ Risk & diversification analysis
- 🏆 Top holdings and exposure breakdowns

---

## 🧠 Portfolio Dashboard Overview

The InvestIQ dashboard is the core user experience and includes:

### 📊 Portfolio Summary

- Total Portfolio Value
- Total Invested
- Daily Change (simulated)
- Number of Holdings

### 🧩 Allocation & Exposure

- Asset Allocation (Stocks, ETFs, Cash, Others)
- Sector Exposure (Technology, Healthcare, Finance, etc.)

### 🏆 Top Holdings

- Largest positions in the portfolio
- Weight distribution per asset

### 📈 Portfolio Insights

- Concentration risk indicators
- Diversification quality overview
- ETF overlap detection (rule-based for MVP)

### ⚖️ Diversification Score

- Score out of 100 measuring portfolio balance
- Visual gauge representation

### ⚠️ Risk Assessment

- Risk level (Low / Moderate / High)
- Risk score based on concentration and volatility heuristics

---

## 🧱 Tech Stack

### Frontend

- Vite + React 19
- TanStack Router (file-based routing)
- Tailwind CSS
- Hosted on Netlify or Coolify

### Backend

- Node.js
- Express 5

### Database

- PostgreSQL (Docker)

### Market Data

- **Mock data engine (MVP stage)**
  - Simulated stock prices
  - Hardcoded market movements
  - Predefined sector/industry data

---

## 📊 System Architecture

InvestIQ follows a clean separation of responsibilities:

- **Frontend (Dashboard UI)**
  Displays portfolio analytics, charts, and insights

- **Backend (Node.js + Express)**
  Handles portfolio logic, calculations, and API orchestration

- **Database (PostgreSQL)**
  Stores users, portfolios, holdings, and transactions

- **Mock Data Layer (MVP Engine)**
  Provides simulated stock prices and market behavior

---

## 🧮 Portfolio Logic

All portfolio metrics are calculated in real time using simulated market data:

- **Total Value** = Shares × Current Price (mocked)
- **Total Return** = Current Value − Invested Value
- **Allocation** = Percentage distribution across assets and sectors
- **Risk Score** = Based on concentration and volatility heuristics
- **Diversification Score** = Based on spread across holdings and sectors

---

## 🔌 Data Simulation Layer (MVP)

InvestIQ currently uses a mock data engine instead of external APIs.

It provides:

- Simulated real-time stock price changes
- Predefined sector performance behavior
- Controlled volatility for testing dashboards
- Consistent datasets for portfolio calculations

---

## 📁 Project Structure

### Frontend

```
frontend/src/
├── routes/
├── components/
├── test/
└── main.jsx
```

### Backend

```
backend/
├── routes/
├── services/
├── db/
├── migrations/
└── index.js
```

---

## 🧪 Testing & Tooling

- Vitest + Testing Library
- oxlint (linting)
- oxfmt (formatting)
- GitHub Actions CI pipeline

---

## 🎯 Key Design Principle

InvestIQ transforms investing from raw data into clear financial understanding — helping users make better decisions through structured insights rather than overwhelming information.

---

## 🗺️ Future Roadmap

InvestIQ is currently in its MVP phase. Here is where we are heading next:

🔐 Authentication & User Profiles
Add secure sign-up/login functionality to allow users to save and manage multiple personalized portfolios.
📡 Live Market Data Integration
Replace the current mock data engine with a real-time financial API (e.g. Finnhub).
📄 Export Features
Enable users to download portfolio reports in PDF or CSV formats for analysis and record-keeping.
