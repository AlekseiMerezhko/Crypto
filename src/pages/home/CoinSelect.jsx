import React, { Component } from 'react';
//import coinsData from '../../coinsList.json';
import Select from './Select';
import Button from './Button';
import CreateInputAndInfo from './CreateInputAndInfo';
import './style/HomePage.css';

class CoinSelect extends Component {
  state = {
    inputValues: Object.keys(this.props.coinsList).map(key => this.props.coinsList[key]).map(elem => { return {name: elem.name, value:1}}),
    arrayOfCoins: Object.keys(this.props.coinsList).map(key => this.props.coinsList[key]),
    arrayOfCurrency: [{id:0,name:`USD`},{id:1,name:`EUR`}],
    selectedCoin: 'Bitcoin',
    selectedCurrency: 'USD', 
    arrayOfCoinComponents: ['Bitcoin'],
    arrayOfCurrencyComponent: ['USD'],
    btnClick: 0
  };

  handleSelectedCoinChange = e => {
    this.setState({selectedCoin: e.target.value});
  }
  handleSelectedCurrencyChange = e => {
    this.setState({selectedCurrency: e.target.value})
  }
  handleAddCoinClick = e => {
    e.preventDefault();
    if(this.state.arrayOfCoinComponents.includes(this.state.selectedCoin)){
      return
    }
    this.state.arrayOfCoinComponents.push(this.state.selectedCoin);
    this.setState({btnClick: +1})        
  }
  handleDeleteCoin = (e) =>{
    const index = this.state.arrayOfCoinComponents.findIndex(param => param === e.target.className);
    this.setState({arrayOfCoinComponents: [this.state.arrayOfCoinComponents.slice(0,index), this.state.arrayOfCoinComponents.slice(index+1)]})
    
  }
  handleAddCurrencyClick = e => {
    e.preventDefault();
    if(this.state.arrayOfCurrencyComponent.includes(this.state.selectedCurrency)){
      return
    }
    this.state.arrayOfCurrencyComponent.push(this.state.selectedCurrency);
    this.setState({btnClick: +1})         
  }
  handleInputChange = e => {  
      const q = this.state.inputValues.find(elem => elem.name === e.target.name);
      q.value = +e.target.value;
      this.setState({btnClick: +1});
  }
  render(){
  return(
  <div className="CoinSelect">
    <div className="CryptoAndCurrency">
    <div className="cryptoMoney">
      <Select onChange={this.handleSelectedCoinChange} coins={this.state.arrayOfCoins}/>
      <Button onClick={this.handleAddCoinClick}/>
      {this.state.arrayOfCoinComponents.map((param,i) => (<p  key={i}> {param} <span key={i}> X </span></p>))}
    </div>

    <div className="currencyMoney">
      <Select onChange={this.handleSelectedCurrencyChange} coins={this.state.arrayOfCurrency}/>
      <Button onClick={this.handleAddCurrencyClick}/>
      {this.state.arrayOfCurrencyComponent.map((param,i) => (<p key={i} htmlFor={param}> {param} <span key={i}> X </span></p>))}
    </div>

    </div>
    <div className="convertCryptoInCurrency">
       {this.state.arrayOfCoinComponents.map((coin,i) => (<CreateInputAndInfo inputValues={this.state.inputValues} handleInputChange={this.handleInputChange} key={i} arrayOfCoinComponents={this.state.arrayOfCoinComponents} arrayOfCurrencyComponent={this.state.arrayOfCurrencyComponent} coin={coin} arrayOfCoins={this.state.arrayOfCoins}/>))}
    </div>
   

  </div>
  )}
}


export default CoinSelect;