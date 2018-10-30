import React from 'react';

const Input = ({handleInputChange, coin}) => (
  <div>
        <h2>{coin}:</h2>
      <input
      onChange={handleInputChange}
      defaultValue="1"
      type="text"
      name={coin}
      id={coin}
      placeholder="Value of Crypto" 
      />
  </div>
);


export default Input;