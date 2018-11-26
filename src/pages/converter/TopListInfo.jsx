import React , { Component } from 'react';
import TopExchangesBody from './TopExchangesBody';


class TopListInfo extends Component{
state = {
  coinsPrice: [],
  isSorted: true,
}
componentDidMount(){
    this.setState({coinsPrice: this.props.coinsPrice.map(param => param.ConversionInfo)});
}
handleSortListOnClick = (e) => {
  const sortValue = e.target.textContent.split(` `).join(``);
  const value = this.state.isSorted ? 1 : -1 ;
  const arr = [].concat(this.state.coinsPrice).sort( (a,b) =>{
   if (a[sortValue] === b[sortValue]) { return 0; }
    this.setState({isSorted: !this.state.isSorted})
    return a[sortValue] < b[sortValue] ? 1 * value : -1 * value;
  });
  this.setState({coinsPrice: arr});
  console.log(sortValue);
  console.log(this.state.coinsPrice)
  //console.log(`sorted`, this.state.coinsPrice.sort( (a,b) => a[sortValue] > b[sortValue]))
} 
render(){
    const {coinsPrice} = this.state;
  return(
      <div className="TopListInfo" >
          
        <div className="TopExchangesHead" onClick={this.handleSortListOnClick}>
          <h4 >Conversion</h4>
          <h4>Conversion Symbol</h4>
          <h4>Currency From</h4>
          <h4>Currency To</h4>
          <h4>Market</h4>
          <h4>Supply</h4>
          <h4>Total Volume 24H</h4>
          <h4>SubBase</h4>
        </div>
        {
           coinsPrice.map((coin,i) => (
               <TopExchangesBody key={coin.RAW[0]} coinInfo={coin}/>
           ))
        }
      </div> 
  )
}
}


export default TopListInfo;