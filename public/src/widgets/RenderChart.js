import { toCurrency } from '../services/CurrencyService.js';

export default function renderChart(equilibriumData){
    functionPlot({
        target: '#chart',
        annotations: [{
          x: equilibriumData.equilibriumPrice,
        }],
        disableZoom: true,
        tip: {
          xLine: true,
          yLine: true,
          renderer: function (x, y, index) {
            return "Price: $" + toCurrency(x, false)
          }
        },
        xAxis: {
          label: 'Price',
          domain: [0, 50]
        },
        yAxis: {
          label: 'Quantity Produced',
          domain: [0, 100]
        },
        data: [
            {
                fn: equilibriumData.mDemand + 'x + ' + equilibriumData.bDemand,
                color: 'rgb(172, 223, 147)',
                closed: true 
            },
            { 
                fn: `${equilibriumData.mSupply} x + ${equilibriumData.bSupply}`, 
                color: 'pink', 
                closed:true 
            },
            {
                // to render a vertical line
                fn: '1000000000x - ' + equilibriumData.price * 1000000000,
                color: 'black'
            }
        ]
    })
}
