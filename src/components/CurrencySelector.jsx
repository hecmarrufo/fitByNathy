import React from "react";

const CurrencySelector = () => {
	return (
        <div className="currency-toggle-wrapper" data-first="USD" data-second="COL">
            <div className="currency-toggle">
                <input className="currency-toggle-input" type="checkbox" />
                <div className="currency-toggle-bg"></div>
                <div className="currency-toggle-switch" />
            </div>
        </div>
	);
};

export default CurrencySelector;