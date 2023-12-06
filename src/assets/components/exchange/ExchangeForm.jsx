// ExchangeForm.js
import React, { useState } from "react";

const ExchangeForm = ({ wallet, setWallet, defaultCurrency }) => {
  const [exchangeAmount, setExchangeAmount] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("USD");

  const handleExchange = () => {
    // Logic to handle currency exchange
    // You may need to fetch real-time exchange rates from an API for accurate calculations

    // Example: 1 EUR = 1.24 USD
    const exchangeRates = {
      USD: 1,
      EUR: 1.24,
      XAF: 0.007,
    };

    const amountInDefaultCurrency =
      exchangeAmount / exchangeRates[defaultCurrency];
    const newWallet = { ...wallet };

    newWallet[defaultCurrency] -= amountInDefaultCurrency;
    newWallet[targetCurrency] += parseFloat(exchangeAmount);

    setWallet(newWallet);
    setExchangeAmount("");
  };

  return (
    <div className="exchange-form">
      <h3>Exchange Form</h3>
      <input
        type="number"
        value={exchangeAmount}
        onChange={(e) => setExchangeAmount(e.target.value)}
      />
      <select
        value={targetCurrency}
        onChange={(e) => setTargetCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="XAF">XAF</option>
      </select>
      <button onClick={handleExchange}>Exchange</button>
    </div>
  );
};

export default ExchangeForm;
