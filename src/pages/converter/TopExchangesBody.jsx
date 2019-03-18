import React from 'react';

const TopExchangesBody = ({ coin }) => (
  <tr>
    <td>{coin.FullName}</td>
    <td>{coin.Algorithm}</td>
    <td>{coin.PRICE.toFixed(6)}</td>
    <td>{coin.LASTMARKET}</td>
    

  </tr>
);

export default TopExchangesBody;