import React, { Component } from 'react';
//import coinsData from '../../coinsList.json';
import Select from './Select';
import Button from './Button';
import CreateInputAndInfo from './CreateInputAndInfo';
import './style/HomePage.css';
import '../loader.css';
import extraList from '../../coinsList';
class CoinSelect extends Component {
  state = {
    inputValues:{},
    arrayOfCoins: [],
    arrayOfCurrency: [{id:0,name:`USD`},{id:1,name:`EUR`}],
    selectedCoin: 'Bitcoin',
    selectedCurrency: 'USD', 
    arrayOfCoinComponents: ['Bitcoin'],
    arrayOfCurrencyComponent: ['USD'],
    btnClick: 0,
    homeError: false,
  };

  componentDidMount(){
    fetch('https://api.coinmarketcap.com/v2/ticker/?convert=EUR&limit=10')
      .then(response => response.json())  
      .then(response => console.log(response))  
      .then(response => this.setState({ arrayOfCoins: process.env.REACT_APP_EXTRA_COINS_LIST}))
      .catch(err => {
        this.setState({
           homeError: true,
           arrayOfCoins: Object.keys(extraList.data).map(key => extraList.data[key]),
           inputValues: Object.keys(extraList.data).map(key => extraList.data[key]).map(elem => { return {name: elem.name, value:1}})})
        });




     
  }
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
    const arr = [].concat(this.state.arrayOfCoinComponents)
    arr.push(this.state.selectedCoin);
    this.setState({arrayOfCoinComponents: arr});        
  }
  handleAddCurrencyClick = e => {
    e.preventDefault();
    if(this.state.arrayOfCurrencyComponent.includes(this.state.selectedCurrency)){
      return
    }
    //this.setState({arrayOfCoinComponents: [this.state.arrayOfCoinComponents.concat(this.state.selectedCurrency)]})
    this.state.arrayOfCurrencyComponent.push(this.state.selectedCurrency);
    this.setState({btnClick: +1})         
  }

  handleDeleteCoin = (e) =>{
    const index = this.state.arrayOfCoinComponents.indexOf(this.state.arrayOfCoinComponents.find(param => param === e.target.className));
    const arr = this.state.arrayOfCoinComponents.slice(0, index).concat(this.state.arrayOfCoinComponents.slice(index+1));
    this.setState({arrayOfCoinComponents: arr});
  }
  handleDeleteCurrency = (e) =>{
    const index = this.state.arrayOfCurrencyComponent.indexOf(this.state.arrayOfCurrencyComponent.find(param => param === e.target.className));
    const arr = this.state.arrayOfCurrencyComponent.slice(0, index).concat(this.state.arrayOfCurrencyComponent.slice(index+1));
    this.setState({arrayOfCurrencyComponent: arr});
  }
  
  handleInputChange = e => {  
      const q = this.state.inputValues.find(elem => elem.name === e.target.name);
      q.value = +e.target.value;
      this.setState({btnClick: +1});
  }
  render(){
    
  return(
    
  this.state.arrayOfCoins.length > 1 ?
  
    <div className="CoinSelect">
      {this.state.homeError ?
      <h1 className='homeError' style={ {color: "red", fontSize: 14, textAlign: 'center'}}>
          Server crashed.Just now You are using Extra CoinsList on Home Page.Data can be not correct
      </h1> : null }
      
      <div className="CryptoAndCurrency">
        <div className="cryptoMoney">
          <Select onChange={this.handleSelectedCoinChange} coins={this.state.arrayOfCoins}/>
          <Button onClick={this.handleAddCoinClick}/>
          {this.state.arrayOfCoinComponents.map((param) => (
            <p key={param}>
              {param} 
              <span className={param} onClick={this.handleDeleteCoin} key={param} > X </span>
            </p>
            ))}
        </div>

        <div className="currencyMoney">
          <Select onChange={this.handleSelectedCurrencyChange} coins={this.state.arrayOfCurrency}/>
          <Button onClick={this.handleAddCurrencyClick}/>
          {this.state.arrayOfCurrencyComponent.map((param) => (
            <p key={param}>
              {param}
              <span className={param} onClick={this.handleDeleteCurrency} key={param}> X </span>
            </p>
          ))}
        </div>
      </div>
    <div className="convertCryptoInCurrency">
       {this.state.arrayOfCoinComponents.map((coin,i) => (
          <CreateInputAndInfo inputValues={this.state.inputValues} handleInputChange={this.handleInputChange}
            key={i} arrayOfCoinComponents={this.state.arrayOfCoinComponents}
            arrayOfCurrencyComponent={this.state.arrayOfCurrencyComponent} coin={coin}
            arrayOfCoins={this.state.arrayOfCoins}/>
          ))}
    </div>
   </div>
   :
  <div className="lds-dual-ring"></div>
  )}
}


export default CoinSelect;