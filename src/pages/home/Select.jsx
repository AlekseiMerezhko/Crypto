import React from 'react';
import './style/HomePageSelect.css';

const Select = ({ coins, onChange }) => (
    <select  onChange={onChange}>
        {coins.map(coin => (<option value={coin.name || coin}  key={coin.id || coin}> {coin.name || coin}</option>))}
    </select>
);

export default Select;