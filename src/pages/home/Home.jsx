import React, { Component } from 'react';
import CoinInfo from './CoinInfo';

class Home extends  Component {

render(){
  return(
  <div className="symbolPrice">
    <CoinInfo/>
  </div>
  )}
}


export default Home;