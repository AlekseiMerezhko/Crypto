import React from 'react';
import DataChart from './DataChart';
import './History.css';
const History = ({data}) => (
  <div>
    <DataChart data={data}/>
  </div>
);

export default History;