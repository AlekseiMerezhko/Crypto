import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

//Import Pages
import Coins from './pages/coins/Coins';
import Converter from './pages/converter/Converter';
import History from './pages/history/History';
import News from './pages/news/News';
import Home from './pages/home/Home'; 

import ForOFor from './pages/404';

import logo from './logo.svg';
import './App.css';

class App extends Component{
  state = {
    coinsList: {},
    allCoins: {},
    news: [],
    coinsPrice: [],
    data: [],
  };

  // filterListById = (list, id) => (
  //   list.find(coin => coin.Id === id)
  // );

  componentDidMount() {
    fetch('https://api.coinmarketcap.com/v2/ticker/?convert=EUR&limit=10')
      .then(responce => responce.json())  
      .then(responce => this.setState({ coinsList: responce.data}))
      .catch(err => alert(err));
    fetch('https://min-api.cryptocompare.com/data/all/coinlist')
      .then(responce => responce.json())  
      .then(responce => this.setState({ allCoins: Object.keys(responce.Data).slice(0, 100).map(key => responce.Data[key]) }))
      .catch(err => alert(err));
    fetch('https://min-api.cryptocompare.com/data/v2/news/?lang=EN')
      .then(responce => responce.json())  
      .then(responce => this.setState({ news: responce.Data }))
      .catch(err => alert(err));
    fetch('https://min-api.cryptocompare.com/data/top/totalvol?tsym=USD&page=2')
      .then(responce => responce.json())  
      .then(responce => this.setState({ coinsPrice: responce.Data }))
      .catch(err => alert(err));
    fetch(`https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=10`)
      .then(responce => responce.json())  
      .then(responce => this.setState({ data: responce.Data}))
      .catch(err => alert(err));
  }
  render(){
  const { coinsList } = this.state;
  const { allCoins } = this.state;
  const { news } = this.state;
  const { coinsPrice } = this.state;
  const { data } = this.state;
  
  return(
  <BrowserRouter>
    <div className="App">
     <header>
       <div className="App-logo">
         
         <img src={logo} alt="Crypto"/>
       </div>
      <ul className='menu'>
        <li>
          <NavLink to="/" activeClassName="active" exact>Home</NavLink>
        </li>
        <li>
          <NavLink to="/history" activeClassName="active">History</NavLink>
        </li>
        <li>
          <NavLink to="/converter" activeClassName="active">Info</NavLink>
        </li>
        <li>
          <NavLink to="/news" activeClassName="active">News</NavLink> 
        </li>
        <li>
          <NavLink to="/coins" activeClassName="active">Coins</NavLink>
        </li>
      </ul>
      
     </header>
      <Switch>
        <Route exact path="/" component={props => <Home coinsList={coinsList} />} />
        <Route path="/history" component={props => <History data={data} />} />} >
        <Route path="/converter" component={props => <Converter coinsPrice={coinsPrice}/>} />
        <Route path="/news" component={props =>  <News news={news}/>} />
        <Route path="/coins" component={props =>  <Coins allCoins={allCoins}/>} />
        <Route component={ForOFor} />
      </Switch>
    </div>
  </BrowserRouter>
  )}
};

App.displayName = 'App';

export default App;
