import React from 'react';

const ConverPriceFromInput = ({ inputValues, arrayOfCoinComponents, arrayOfCurrencyComponent, coin, arrayOfCoins}) => (
    <div>
        {arrayOfCurrencyComponent.map((param,i) => (<p key={i} >{param} : 
            <span> {arrayOfCoins.find(q => q.name === coin).quotes[param].price * inputValues.find(inputs => inputs.name === coin).value }</span>
            </p>))}        
    </div>
);

export default ConverPriceFromInput;