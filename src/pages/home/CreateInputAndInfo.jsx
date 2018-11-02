import React from 'react';
import Input from './Input';
import ConverPriceFromInput from './ConverPriceFromInput';


const CreateInputAndInfo = ({inputValues, handleInputChange, arrayOfCoinComponents, arrayOfCurrencyComponent, coin, arrayOfCoins}) => (
    <div className="CreateInputAndInfo">
      <Input  handleInputChange={handleInputChange} coin={coin}/>
      <ConverPriceFromInput inputValues={inputValues} coin={coin} arrayOfCoinComponents={arrayOfCoinComponents} arrayOfCurrencyComponent={arrayOfCurrencyComponent}
       arrayOfCoins={arrayOfCoins}/>
    </div>
);

export default CreateInputAndInfo;