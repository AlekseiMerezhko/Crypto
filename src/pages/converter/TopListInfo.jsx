import React, { Component } from 'react';
import TopExchangesBody from './TopExchangesBody';
import '../loader.css';
import _ from 'lodash';

class TopListInfo extends Component {
  mounting = false;
  state = {
    coins: [],
    sort: 'asc',
    sortedParam: '',
  }
  async componentDidMount() {
    this.mounting = true;
    fetch('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD')
      .then(responce => responce.json())
      .then(responce => {
        if (this.mounting)
          this.setState({ coins: responce.Data.map(param => {return { ...param.CoinInfo, ...param.RAW.USD} } ) })
      })
      //.then( response => { if(this.mounting)this.setState({coinsPrice: response})})
      .catch(err => alert(err));
    //this.setState({coinsPrice: this.props.coinsPrice.map(param => param.ConversionInfo)});
  }
  componentWillUnmount() {
    this.mounting = false;
  }


  handleSortListOnClick = (param) => {

    const sortedArray = _.orderBy(this.state.coins, param, this.state.sort === 'asc' ? 'desc' : 'asc');
    this.setState({
      coins: sortedArray,
      sort: this.state.sort === 'asc' ? 'desc' : 'asc',
      sortedParam: param,
    });
  }
  render() {
    const { coins } = this.state;
    
    return (
      coins.length > 1 ?
        <div className="TopListInfo">
          <table className="table  table-striped table-dark">
            <thead>
              <tr>
                <th scope="col" className={this.state.sortedParam ==='FullName' ? 'active-sort' : null} onClick={this.handleSortListOnClick.bind(null, `FullName`)}>Name
                </th>
                <th scope="col" className={this.state.sortedParam ==='Algorithm' ? 'active-sort' : null} onClick={this.handleSortListOnClick.bind(null, `Algorithm`)}>Algorithm</th>
                <th scope="col" className={this.state.sortedParam ==='PRICE' ? 'active-sort' : null}onClick={this.handleSortListOnClick.bind(null, `PRICE`)}>USD</th>
                <th scope="col" className={this.state.sortedParam ==='LASTMARKET' ? 'active-sort' : null} onClick={this.handleSortListOnClick.bind(null, `LASTMARKET`)}>Last Market</th>
                
              </tr>
            </thead>
            <tbody>
              {
                coins.map(coin => <TopExchangesBody key={coin.Id}  coin={coin} />)
              }
              
            </tbody>
          </table>
        </div>
        : <div className="lds-dual-ring"></div>
    )
  }
}


export default TopListInfo;