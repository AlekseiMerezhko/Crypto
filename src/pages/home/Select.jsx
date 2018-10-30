import React from 'react';

const Select = ({ coins, onChange }) => (
    <select onChange={onChange}>
        {coins.map(coin => (<option value={coin.name}  key={coin.id}> {coin.name}</option>))}
    </select>
);

export default Select;