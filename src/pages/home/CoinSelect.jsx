import React, { Component } from 'react';
import coinsData from '../../coinsList.json'
//{
// const obj = {
//     BTC: {
//      USD: 6545.18,
//      EUR: 5654.83
//   },
//     ETH: {
//      USD: 204.91,
//      EUR: 177.84
//   }
// }

const qwe = Object.keys(coinsData.Data).slice(9, 20).map(key => coinsData.Data[key])
console.log(qwe)

class CoinSelect extends Component {
  state = {
    //coinsData,
    //coinsList: [],
    coins:[ {
        name: 'BTC',
        USD: 6545.18,
        EUR: 5654.83,
        id: 0
      },
      {
        name: 'ETH',
        USD: 204.91,
        EUR: 177.84,
        id: 1
    }
    ],
    inputValue: 1,
    selectValue: 'BTC',
  };
  handleInputChange = e => {
      console.log(typeof e.target.value)
      this.setState({ inputValue:  e.target.value })      
  }

  handleSelectChange = (e) => {
     console.log(typeof e.target.value);
     this.setState({ selectValue: e.target.value })
   }
  //componentDidMount = () => {
  //  this.setState({ coinsList: Object.keys(coinsData.Data).slice(9, 20).map(key => coinsData.Data[key]) })
  //}

  render(){
    const usd = this.state.coins.find(param => param.name === this.state.selectValue).USD;
    const eur = this.state.coins.find(param => param.name === this.state.selectValue).EUR;
    console.log(usd, eur)

  return(
  <div className="LeftCoinSelect">
    <select onChange={this.handleSelectChange}>
      {this.state.coins.map(coin => (<option value={coin.name}  key={coin.id}>{coin.name}</option>))}
    </select>
    <label htmlFor="LeftCoinValue">
        :
      <input
      defaultValue="1"
      type="text"
      name="LeftCoinValue"
      id="LeftCoinValue"
      placeholder="Value of Crypto" 
      onChange={this.handleInputChange}
      />
    </label>
    <p>USD:<span className="CoinUsd">{usd * this.state.inputValue}</span></p>
    <p>EUR:<span className="CoinEur">{eur * this.state.inputValue}</span></p>
  </div>
  )}
}


export default CoinSelect;