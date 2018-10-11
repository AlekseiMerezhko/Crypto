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

const App = () => (
  <BrowserRouter>
    <div className="App">
     <header>
       <div className="App-logo">
         <img src={logo} alt="Crypto"/>
       </div>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active" exact>Price</NavLink>
        </li>
        <li>
          <NavLink to="/history" activeClassName="active">History</NavLink>
        </li>
        <li>
          <NavLink to="/converter" activeClassName="active">Converter</NavLink>
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
        <Route exact path="/" component={Home} />
        <Route path="/history" component={History} />
        <Route path="/converter" component={Converter} />
        <Route path="/news" component={News} />
        <Route path="/coins" component={Coins} />
        <Route component={ForOFor} />
      </Switch>
    </div>
  </BrowserRouter>
);

App.displayName = 'App';

export default App;
