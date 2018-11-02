import React from 'react';
import './style/HomePageInput.css';

const Input = ({handleInputChange, coin}) => (
  <div>
        <h2>{coin}:</h2>
      <input
      onChange={handleInputChange}
      defaultValue="1"
      type="text"
      name={coin}
      id={coin}
      placeholder={coin} 
      />
  </div>
);


export default Input;