import React, { Component } from 'react';
import CoinInfo from './CoinInfo';

class Home extends  Component {
  
render(){
  return(
  <div className="symbolPrice">
    <CoinInfo coinsList={this.props.coinsList}/>
  </div>
  )}
}


export default Home;