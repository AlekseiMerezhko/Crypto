import React from 'react';
import { CRYPTO_COMPARE_URL } from '../../constains';
import './CoinCard.css';

const CoinCard = ({ coin }) => (
  <div className="coin-card">
    <h4>{coin.CoinName}</h4>
    {coin.ImageUrl && <img src={`${CRYPTO_COMPARE_URL}${coin.ImageUrl}`} alt={coin.CoinName} />}
  </div>
);


export default CoinCard;