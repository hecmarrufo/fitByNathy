import React, { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";


export default function CurrencySelector() {
    const { usdPrices, setUsdPrices } = useContext(CurrencyContext);

    // Call setCurrencyData to update currencyData
    const handleCurrencyChange = (event) => {
        setUsdPrices(event.target.checked);
      };
  
      return (
          <div className="currency-toggle-wrapper" data-first="USD" data-second="COL">
              <div className="currency-toggle">
                  <input className="currency-toggle-input" type="checkbox" 
                      checked={usdPrices}
                      onChange={handleCurrencyChange} />
                  <div className="currency-toggle-bg" />
                  <div className="currency-toggle-switch" />
              </div>
          </div>
      );
  };