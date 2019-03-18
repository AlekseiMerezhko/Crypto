import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
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

class App extends Component{
  render(){
  return(
  <BrowserRouter>
    <div className="App">
     <header >
      <img className="App-logo" src={logo} alt="Crypto"/>
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

     <main>
      <Switch>
        <Route exact path="/" component={props => <Home />} />
        <Route path="/history" component={props => <History />} />
        <Route path="/converter" component={props => <Converter/>} />
        <Route path="/news" component={props =>  <News/>} />
        <Route path="/coins" component={props =>  <Coins/>} />
        <Route component={ForOFor} />
      </Switch>
    </main>
      <footer>
        <div className="container">
          <p>Create by <a href="https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B9-%D0%BC%D0%B5%D1%80%D0%B5%D0%B6%D0%BA%D0%BE-34a327143/"> Alex Merezhko </a></p>
          <p>GitHub : <a href="https://github.com/AlekseiMerezhko">AlekseiMerezhko</a></p>
        </div>
      </footer>
    </div>
  </BrowserRouter>
  )}
};

App.displayName = 'App';

export default App;
