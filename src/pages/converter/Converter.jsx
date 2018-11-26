import React from 'react';
import TopListInfo from './TopListInfo';
import './Converter.css';

const Converter = ({coinsPrice}) => (
  <div>
    <TopListInfo coinsPrice={coinsPrice}/>
  </div>
);

export default Converter;