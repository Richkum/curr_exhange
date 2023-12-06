// Wallet.js
import React, { useState } from "react";
import Header from "../header/Hearder";
import CurrencyBalance from "../currencybalance/CurrencyBalance";
import ExchangeForm from "../exchange/ExchangeForm";
import DepositForm from "../deposite/DepositForm";

const Wallet = () => {
  const [defaultCurrency, setDefaultCurrency] = useState("USD");
  const [wallet, setWallet] = useState({
    USD: 100,
    EUR: 500,
    XAF: 10000,
  });

  const calculateTotalizedValue = () => {
    // Logic to calculate totalized value in the user's default currency
    // You may need to fetch real-time exchange rates from an API for accurate calculations
    const exchangeRates = {
      USD: 1,
      EUR: 1.24,
      XAF: 0.007,
    };

    const totalizedValue = Object.keys(wallet).reduce(
      (total, currency) => total + wallet[currency] / exchangeRates[currency],
      0
    );

    return totalizedValue.toFixed(2);
  };

  return (
    <div className="wallet-container">
      <Header setDefaultCurrency={setDefaultCurrency} />
      <p>Default Currency: {defaultCurrency}</p>
      <p>
        Totalized Value: {calculateTotalizedValue()} {defaultCurrency}
      </p>

      <CurrencyBalance currency="USD" balance={wallet.USD} />
      <CurrencyBalance currency="EUR" balance={wallet.EUR} />
      <CurrencyBalance currency="XAF" balance={wallet.XAF} />

      <ExchangeForm
        wallet={wallet}
        setWallet={setWallet}
        defaultCurrency={defaultCurrency}
      />
      <DepositForm wallet={wallet} setWallet={setWallet} />
    </div>
  );
};

export default Wallet;
