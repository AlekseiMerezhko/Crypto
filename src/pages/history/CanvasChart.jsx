import React, { Component } from 'react';
import Chart from 'chart.js';
import '../loader.css';





class CanvasChart extends Component {
    state = {
        data: [],
        currency: this.props.currency
    }
    getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }


    waitFor = (url, coin, currency) => {
      fetch(url)
        .then(resp => resp.json())
        .then( resp => {
            if(!this.state.data.some(elem => elem.currencyInfo === currency)){
                 this.setState({
                    data: [].concat({
                        currencyInfo: currency,
                        label: coin,
                        data:   Array.isArray(resp.Data) ? resp.Data.map( param =>  param.close) : null,
                        borderColor: [
                            this.getRandomColor(),
                        ],
                        borderWidth: 2
                    })
                })
            }
            else if(!this.state.data.some(elem => elem.label === coin)){
                 this.setState({
                    data: [].concat(...this.state.data, {
                        currencyInfo: currency,
                        label: coin,
                        data:   Array.isArray(resp.Data) ? resp.Data.map( param =>  param.close) : null,
                        borderColor: [
                            this.getRandomColor(),
                        ],
                        borderWidth: 2
                    })
                })
            }
            
            
        })
    };
    asyncForEach = async (array, callback) => {
        for (let index = 0; index < array.length; index++) {
            await callback(array[index], this.props.currentCurrency);
        }
    }
    start = async () => {
        await this.asyncForEach(this.props.coinsForRequest, async (coin, currency) => {
            await this.waitFor(`https://min-api.cryptocompare.com/data/histoday?fsym=${coin}&tsym=${currency}&limit=10`, coin, currency);
            console.log(coin, currency);
        });
    }
    dateForChart = async () => {
        const dataTime = await fetch(`https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=10`)
            .then(resp => resp.json())
            .then(resp => resp.Data.map(param => param.time));


        const labels = dataTime.map((param) => {
            const fullDate = new Date(param * 1000);
            const date = fullDate.toLocaleDateString("en-US");
            return (`${date}`);
        });

        return labels;
    }
    async createChart() {
        await this.start();
        const ctx = document.getElementById('myChart').getContext('2d');
        this.chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: await this.dateForChart(),
                datasets:  this.state.data,
            },
            options: {
                scales: {
                    xAxes: [{
                        ticks: {
                            beginAtZero: false
                        }
                    }]
                },
                title: {
                    display: true,
                    text: this.props.currentCurrency
                }
            }
        });

        return this.chart;
    };
    componentDidMount() {
        this.createChart();
    }
    componentWillUnmount() {
        this.chart.destroy();
    }
    async componentWillReceiveProps() {
        if(this.chart)
        await this.chart.destroy();
        await this.createChart();
    }

    render() {
        console.log(`propsFromCanvas`, this.state)
        return (
            <div>
                <canvas id="myChart" width="600" height="600"></canvas>
            </div>
        )
    }
}

export default CanvasChart;