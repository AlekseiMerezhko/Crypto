import React from 'react';
const ConverPriceFromInput = ({ inputValues, arrayOfCurrencyComponent, coin, arrayOfCoins}) => {
   return <div className="ConverPriceFromInput">
        {arrayOfCoins.length > 1 ? arrayOfCurrencyComponent.map((param,i) => (
            
        <div key={i} className="ConverPriceFromInputAllInfo">
            <p key={i} >{param} : 
              <span>{
                
                  (arrayOfCoins.find(q => q.name === coin).quotes[param].price * inputValues.find(inputs => inputs.name === coin).value).toFixed(3)
                  
              }</span>
            </p>
             <div className="percentBlock">
                <p>market Cap: { arrayOfCoins.find(q => q.name === coin).quotes[param].market_cap}</p>
                <p>percent Change 1h: {arrayOfCoins.find(q => q.name === coin).quotes[param].percent_change_1h}</p>
                <p>percent Change 24h: {arrayOfCoins.find(q => q.name === coin).quotes[param].percent_change_24h}</p>
                <p>percent Change 7d: {arrayOfCoins.find(q => q.name === coin).quotes[param].percent_change_7d}</p>
            </div> 
        </div>
            ))  :

        <p>Ooops...Somesing wrong</p>}
      
    </div>
};

export default ConverPriceFromInput;