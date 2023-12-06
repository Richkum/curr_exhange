// Header.js
import React from "react";

const Header = ({ setDefaultCurrency }) => {
  return (
    <div className="header">
      <button onClick={() => setDefaultCurrency("USD")}>
        Set Default Currency to USD
      </button>
      <button onClick={() => setDefaultCurrency("EUR")}>
        Set Default Currency to EUR
      </button>
      <button onClick={() => setDefaultCurrency("XAF")}>
        Set Default Currency to XAF
      </button>
    </div>
  );
};

export default Header;
