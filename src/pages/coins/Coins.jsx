import React, { Component } from 'react';
import CoinCard from './CoinCard';
import Input from './Input';
import './Coins.css';
class Coins extends Component{
  state = {
    allCoins: [],
    search: '',
  }
  componentDidMount(){
    console.log(this.state)
    console.log(this.props)
    this.setState({allCoins: this.props.allCoins})
    //this.setState({ allCoins: Object.keys(this.props.allCoins).slice(0, 10).map(key => this.props.allCoins[key])})
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
      <div>
        <div className="allCoinsInput">
          <Input value={search} onChange={this.handleSearchChange} />
        </div>
        <div className="coin-list">
          {allCoins.length>1 ? this.filterListBySearchTerm(allCoins, search).map(coin => (
            <CoinCard coin={coin} key={coin.Id} />
          )) : null}
        </div>
      </div>
    )}
}





export default Coins;