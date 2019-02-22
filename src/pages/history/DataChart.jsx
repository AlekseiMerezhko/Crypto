
import React, {Component} from 'react';
import Chart from 'chart.js';
import _ from 'lodash';


class DataChart extends Component{
    state = {
        chartData: this.props.data,

    }
    createChart = () => {
        const ctx = document.getElementById('myChart').getContext('2d');
        this.chart = new Chart(ctx, {
            type: 'line',
            data: {
              labels: this.dateForChart(),
              datasets: [{
                label: 'Daily Bitcoin',
                data: this.state.chartData.map(param => param.high),
             backgroundColor: [
                '#61dafb',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
            ],
            borderWidth: 1
        }]
    },
            options: {
                scales: {
                    xAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                },
                title: {
                    display: true,
                    text: 'History'
                }
            }
        });
        return this.chart;
    };

    
    dateForChart = () => {
        const dataTime = this.state.chartData.map(param => param.time) 
        const labels = dataTime.map((param) => {
            const fullDate = new Date(param * 1000);
            const date = fullDate.toLocaleDateString("en-US");
            return (`${date}`);
        });
        return labels;
    }

    componentDidMount() {
        this.createChart();
    }
    componentWillReceiveProps() {
        this.chart.update();
    }
    componentWillUnmount() {
        this.chart.destroy();
    }
    render(){
        return(
            <div>
                <canvas id="myChart" width="400" height="400"></canvas>
            </div>
        )
    }
}

export default DataChart;