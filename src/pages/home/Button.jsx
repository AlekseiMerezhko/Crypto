import React from 'react';
import './style/HomePageButton.css'



const Button = ({onClick}) => (
    <button onClick={onClick}>
        +Add
    </button>
);

export default Button;