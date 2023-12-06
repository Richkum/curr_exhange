// DepositForm.js
import React, { useState } from "react";

const DepositForm = ({ wallet, setWallet }) => {
  const [depositAmount, setDepositAmount] = useState("");
  const [depositCurrency, setDepositCurrency] = useState("USD");

  const handleDeposit = () => {
    // Logic to handle currency deposit
    const newWallet = { ...wallet };
    newWallet[depositCurrency] += parseFloat(depositAmount);

    setWallet(newWallet);
    setDepositAmount("");
  };

  return (
    <div className="deposit-form">
      <h3>Deposit Form</h3>
      <input
        type="number"
        value={depositAmount}
        onChange={(e) => setDepositAmount(e.target.value)}
      />
      <select
        value={depositCurrency}
        onChange={(e) => setDepositCurrency(e.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="XAF">XAF</option>
      </select>
      <button onClick={handleDeposit}>Deposit</button>
    </div>
  );
};

export default DepositForm;
