import React, { Component } from 'react';
import CoinSelect from './CoinSelect';


class CoinInfo extends Component {

render(){
  return(
  <div>
    <CoinSelect coinsList={this.props.coinsList}/>   
  </div>
  )}
}


export default CoinInfo;