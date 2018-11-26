import React from 'react';

const TopExchangesBody = ({coinInfo}) => (
  <div className="TopExchangesBody">
      
    <p>{coinInfo.Conversion}</p>
    <p>{coinInfo.ConversionSymbol}</p>
    <p>{coinInfo.CurrencyFrom}</p>
    <p>{coinInfo.CurrencyTo}</p>
    <p>{coinInfo.Market}</p>
    <p>{Math.floor(coinInfo.Supply)}</p>
    <p>{Math.floor(coinInfo.TotalVolume24H)}</p>
    <p>{coinInfo.SubBase}</p>    
  </div>
);

export default TopExchangesBody;