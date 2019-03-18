
import React, { Component } from 'react';
import Select from '../home/Select';
import '../loader.css';
import Button from '../home/Button';
// import _ from 'lodash';
import CanvasChart from './CanvasChart';

class DataChart extends Component {
    mounted = false;
    select = React.createRef();
    state = {
        chartDataDay: [],
        chartSecondDataDay: [],
        allCoins: [],
        allCurrency: ['USD', 'JPY', 'EUR', 'RUB', 'UAH'],
        currentCurrency: 'USD',
        coinsForRequest: [`42`],
        currentCoin: '42',
    }
    handleChengeSelectedCurrency = (e) => {
        this.setState({ currentCurrency: e.currentTarget.value });
    }
    handleAddCoinClick = e => {
        e.preventDefault();
        if (this.state.coinsForRequest.includes(this.select.current.value)) {
            return
        }
        const arr = [].concat(this.state.coinsForRequest, this.select.current.value)
        this.setState({ coinsForRequest: arr });
    }

     componentDidMount() {  
         fetch('https://min-api.cryptocompare.com/data/all/coinlist')
            .then(resp => resp.json())
            .then(resp => Object.keys(resp.Data).slice(0, 50))
            .then(resp => this.setState({ allCoins: resp }));
    }
    componentWillUnmount() {
        this.mounted = false;
    }
    render() {
        console.log(this.state)
        const { coinsForRequest, currentCurrency } = this.state
        return (
            <div>
                {this.state.allCoins.length > 1 ?
                    <div>
                        <Select coins={this.state.allCurrency} onChange={this.handleChengeSelectedCurrency}></Select>
                        <select ref={this.select}>
                            {this.state.allCoins.map(coin => (<option value={coin.name || coin} key={coin.id || coin}> {coin.name || coin}</option>))}
                        </select>
                        <Button onClick={this.handleAddCoinClick} />
                    </div>
                    : <div className="lds-dual-ring"></div>
                }
                <CanvasChart coinsForRequest={coinsForRequest} currentCurrency={currentCurrency} ></CanvasChart>
            </div>
        )
    }
}

export default DataChart;