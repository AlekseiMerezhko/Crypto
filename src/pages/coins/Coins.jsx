import React, { Component } from 'react';
import CoinCard from './CoinCard';
import Input from './Input';
import './Coins.css';
import '../loader.css';
class Coins extends Component{
  mounted = false;
  state = {
    allCoins: [],
    search: '',
  }
  componentDidMount(){
    this.mounted = true;
    fetch('https://min-api.cryptocompare.com/data/all/coinlist')
      .then(response => response.json())  
      .then(response => {if(this.mounted)this.setState({ allCoins: Object.keys(response.Data).slice(0, 100).map(key => response.Data[key]) })})
      .catch(err => alert(err));
      //this.setState({ allCoins: Object.keys(this.props.allCoins).slice(0, 10).map(key => this.props.allCoins[key])})
  }
  componentWillUnmount(){
    this.mounted = false
  }
  handleSearchChange = (search) => {
    this.setState({ search });
  };

  filterListBySearchTerm = (list, searchTerm) => (
    list.filter(coin => coin.CoinName.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  render(){
    const { search } = this.state;
    const { allCoins } = this.state;

    return(
      allCoins.length> 1 ?
      <div>
        <div className="allCoinsInput">
          <Input value={search} onChange={this.handleSearchChange} />
        </div>
        <div className="coin-list">
          {this.filterListBySearchTerm(allCoins, search).map(coin => (
            <CoinCard coin={coin} key={coin.Id} />
          ))}
        </div>
      </div>
      : <div className="lds-dual-ring"></div>
    )}
}





export default Coins;