import React from 'react';
import './style/HomePageButton.css'



const Button = ({onClick}) => (
    <button className='add-currency_home' onClick={onClick}>
        +Add
    </button>
);

export default Button;