// CurrencyBalance.js
import React from "react";

const CurrencyBalance = ({ currency, balance }) => {
  return (
    <div className="currency-balance">
      <h3>
        {currency} Balance: {balance} {currency}
      </h3>
    </div>
  );
};

export default CurrencyBalance;
