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
    coinsList: {
1: {
id: 1,
name: "Bitcoin",
symbol: "BTC",
website_slug: "bitcoin",
rank: 1,
circulating_supply: 17338987,
total_supply: 17338987,
max_supply: 21000000,
quotes: {
USD: {
price: 6517.6254106,
volume_24h: 3438743435.58475,
market_cap: 113009022265,
percent_change_1h: 0.36,
percent_change_24h: 0.78,
percent_change_7d: -0.55
},
EUR: {
price: 5714.1325499812,
volume_24h: 3014815144.8458576,
market_cap: 99077270000,
percent_change_1h: 0.36,
percent_change_24h: 0.78,
percent_change_7d: -0.55
}
},
last_updated: 1540376906
},
2: {
id: 2,
name: "Litecoin",
symbol: "LTC",
website_slug: "litecoin",
rank: 7,
circulating_supply: 58860327,
total_supply: 58860327,
max_supply: 84000000,
quotes: {
USD: {
price: 52.7820342142,
volume_24h: 270870760.416362,
market_cap: 3106767783,
percent_change_1h: 0.8,
percent_change_24h: 1.26,
percent_change_7d: -1.4
},
EUR: {
price: 46.2750650363,
volume_24h: 237477813.07223254,
market_cap: 2723765451,
percent_change_1h: 0.8,
percent_change_24h: 1.26,
percent_change_7d: -1.4
}
},
last_updated: 1540376941
},
52: {
id: 52,
name: "XRP",
symbol: "XRP",
website_slug: "ripple",
rank: 3,
circulating_supply: 39997634397,
total_supply: 99991817275,
max_supply: 100000000000,
quotes: {
USD: {
price: 0.4635550215,
volume_24h: 464497433.410481,
market_cap: 18541104274,
percent_change_1h: 0.55,
percent_change_24h: 4.28,
percent_change_7d: -1.01
},
EUR: {
price: 0.4064079585,
volume_24h: 407234189.8196363,
market_cap: 16255356939,
percent_change_1h: 0.55,
percent_change_24h: 4.28,
percent_change_7d: -1.01
}
},
last_updated: 1540376943
},
328: {
id: 328,
name: "Monero",
symbol: "XMR",
website_slug: "monero",
rank: 10,
circulating_supply: 16513582,
total_supply: 16513582,
max_supply: null,
quotes: {
USD: {
price: 108.705578147,
volume_24h: 15164682.6872271,
market_cap: 1795118475,
percent_change_1h: 0.54,
percent_change_24h: 0.58,
percent_change_7d: 2.99
},
EUR: {
price: 95.304354473,
volume_24h: 13295180.605545724,
market_cap: 1573816269,
percent_change_1h: 0.54,
percent_change_24h: 0.58,
percent_change_7d: 2.99
}
},
last_updated: 1540376956
},
512: {
id: 512,
name: "Stellar",
symbol: "XLM",
website_slug: "stellar",
rank: 6,
circulating_supply: 18894758343,
total_supply: 104403430212,
max_supply: null,
quotes: {
USD: {
price: 0.2415086049,
volume_24h: 38221580.4776455,
market_cap: 4563246728,
percent_change_1h: 0.02,
percent_change_24h: -0.72,
percent_change_7d: 3
},
EUR: {
price: 0.2117354241,
volume_24h: 33509624.036361314,
market_cap: 4000689672,
percent_change_1h: 0.02,
percent_change_24h: -0.72,
percent_change_7d: 3
}
},
last_updated: 1540376949
},
825: {
id: 825,
name: "Tether",
symbol: "USDT",
website_slug: "tether",
rank: 8,
circulating_supply: 2026421736,
total_supply: 3080109502,
max_supply: null,
quotes: {
USD: {
price: 0.9864428282,
volume_24h: 1858652479.02821,
market_cap: 1998949188,
percent_change_1h: 0.21,
percent_change_24h: -0.1,
percent_change_7d: 1.47
},
EUR: {
price: 0.8648341563,
volume_24h: 1629517801.4136097,
market_cap: 1752518732,
percent_change_1h: 0.21,
percent_change_24h: -0.1,
percent_change_7d: 1.47
}
},
last_updated: 1540376950
},
1027: {
id: 1027,
name: "Ethereum",
symbol: "ETH",
website_slug: "ethereum",
rank: 2,
circulating_supply: 102766800,
total_supply: 102766800,
max_supply: null,
quotes: {
USD: {
price: 204.990273606,
volume_24h: 1175426718.74253,
market_cap: 21066194494,
percent_change_1h: 0.41,
percent_change_24h: 1.16,
percent_change_7d: -1.6
},
EUR: {
price: 179.7190726759,
volume_24h: 1030520112.8559495,
market_cap: 18469154037,
percent_change_1h: 0.41,
percent_change_24h: 1.16,
percent_change_7d: -1.6
}
},
last_updated: 1540376961
},
1765: {
id: 1765,
name: "EOS",
symbol: "EOS",
website_slug: "eos",
rank: 5,
circulating_supply: 906245118,
total_supply: 1006245120,
max_supply: null,
quotes: {
USD: {
price: 5.4192050977,
volume_24h: 312962330.611755,
market_cap: 4911128161,
percent_change_1h: 0.48,
percent_change_24h: 0.87,
percent_change_7d: 0.22
},
EUR: {
price: 4.7511254933,
volume_24h: 274380334.49393743,
market_cap: 4305684281,
percent_change_1h: 0.48,
percent_change_24h: 0.87,
percent_change_7d: 0.22
}
},
last_updated: 1540376957
},
1831: {
id: 1831,
name: "Bitcoin Cash",
symbol: "BCH",
website_slug: "bitcoin-cash",
rank: 4,
circulating_supply: 17419538,
total_supply: 17419538,
max_supply: 21000000,
quotes: {
USD: {
price: 445.140717403,
volume_24h: 257402288.654127,
market_cap: 7754145420,
percent_change_1h: 0.41,
percent_change_24h: 0.99,
percent_change_7d: -1.52
},
EUR: {
price: 390.2637697616,
volume_24h: 225669734.5088459,
market_cap: 6798214372,
percent_change_1h: 0.41,
percent_change_24h: 0.99,
percent_change_7d: -1.52
}
},
last_updated: 1540376923
},
2010: {
id: 2010,
name: "Cardano",
symbol: "ADA",
website_slug: "cardano",
rank: 9,
circulating_supply: 25927070538,
total_supply: 31112483745,
max_supply: 45000000000,
quotes: {
USD: {
price: 0.07518504,
volume_24h: 22906699.066699,
market_cap: 1949327835,
percent_change_1h: 0.74,
percent_change_24h: 0.78,
percent_change_7d: -1.06
},
EUR: {
price: 0.0659162283,
volume_24h: 20082761.205756318,
market_cap: 1709014700,
percent_change_1h: 0.74,
percent_change_24h: 0.78,
percent_change_7d: -1.06
}
},
last_updated: 1540376914
}
},
metadata: {
timestamp: 1540376269,
num_cryptocurrencies: 2056,
error: null
},
  };

  // filterListById = (list, id) => (
  //   list.find(coin => coin.Id === id)
  // );

  // componentDidMount() {
  //   fetch('https://api.coinmarketcap.com/v2/ticker/?convert=EUR&limit=10')
  //     .then(responce => responce.json())
  //     .then(responce => this.setState({ coinsList: responce}))
  //     .catch(err => alert(err));
  //     console.log(this.state.coinsList);
  // }
  render(){
  const { coinsList } = this.state;
  return(
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
        <Route exact path="/" component={props => <Home coinsList={coinsList} />} />
        <Route path="/history" component={History} />
        <Route path="/converter" component={Converter} />
        <Route path="/news" component={News} />
        <Route path="/coins" component={Coins} />
        <Route component={ForOFor} />
      </Switch>
    </div>
  </BrowserRouter>
  )}
};

App.displayName = 'App';

export default App;
