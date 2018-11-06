import React from 'react';

const ConverPriceFromInput = ({ inputValues, arrayOfCoinComponents, arrayOfCurrencyComponent, coin, arrayOfCoins}) => (
    <div className="ConverPriceFromInput">
    {/*console.log(`inputValues`,inputValues)}
    {console.log(`arrayOfCoins`,arrayOfCoins)*/}
    
    

        {arrayOfCoins.length > 1 ? arrayOfCurrencyComponent.map((param,i) => (
            
        <div key={i} className="ConverPriceFromInputAllInfo">
            <p key={i} >{param} : 
            <span> {arrayOfCoins.find(q => q.name === coin).quotes[param].price * inputValues.find(inputs => inputs.name === coin).value}</span></p>
            
                <p>market Cap: {arrayOfCoins.find(q => q.name === coin).quotes[param].market_cap}</p>
                <p>percent Change 1h: {arrayOfCoins.find(q => q.name === coin).quotes[param].percent_change_1h}</p>
                <p>percent Change 24h: {arrayOfCoins.find(q => q.name === coin).quotes[param].percent_change_24h}</p>
                <p>percent Change 7d: {arrayOfCoins.find(q => q.name === coin).quotes[param].percent_change_7d}</p>
        </div>
            )): <p>Wait a second please...</p>}
      
    </div>
);

export default ConverPriceFromInput;