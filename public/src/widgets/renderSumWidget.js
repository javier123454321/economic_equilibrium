 import { toCurrency } from '../services/CurrencyService.js';

 function calculateSupplyVsDemand(supply, consumption, price, revenue) {
    if (consumption > supply) {
        return `
        <h3>Price is too low at $${price}</h3>
        <h4>Revenue: $${ toCurrency(revenue, false) } per month</h4>
        <h4>Products sold at this price: ${Math.floor(consumption)} units</h4>
        This would leave consumers with a shortage of 
        <span class='emphasis'> ${Math.floor( consumption - supply)} </span> units. 
        The company would have to either increase price or produce more.`;
    }

    if (consumption <= 0) {
        return `
        <h3>Price is Too High at $${price}</h3>
        No one will buy at this price`;
    }

    if (Math.floor(supply - consumption) == 0 ) {
        return `
        <h2>$${price} is the equilibrium price</h2> 
        <h4>Revenue: $${ toCurrency(revenue, false) } per month</h4>
        <h4>Products sold at this price: ${Math.floor(consumption)} units</h4>
        <h4>Change the price to see how the market behaves with fluctuations</h4>
        `;
    }
    return `
    <h3>$${price} is too expensive</h3> 
    <h4>Revenue: $${ toCurrency(revenue, false) } per month</h4>
    <h4>Products sold at this price: ${Math.floor(consumption)} units</h4>
    People will buy some, but there will be <span class='emphasis'>${Math.floor( supply - consumption )}</span> items left over as it is too expensive`
}

 export default function renderSumWidget(){
    let Mdemand =  parseInt(document.getElementById("demand-input").value);
    let highestPriceConsumersWillPay = parseInt(document.getElementById("higestPrice-input").value);
    let Msupply =  parseInt(document.getElementById("supply-input").value);
    let costToProduceTheItem = parseInt(document.getElementById("cost-input").value);

    let consumption;
    let supply;
    let message = "";

    let price = toCurrency(document.getElementById('price').value, false);

    message = "";
    
    consumption = (price * Mdemand) + highestPriceConsumersWillPay;
    if(consumption < 0){
        consumption = 0
    } 
    supply = (price * Msupply )+ costToProduceTheItem;
    let excessSupply =  ( supply > consumption ? Math.floor( supply - consumption ) : 0 )
    let revenue = consumption * price - ( costToProduceTheItem * excessSupply );

    message = calculateSupplyVsDemand(supply, consumption, price, revenue);

    let template = `
    <div class="output-message">
        ${message}
    </div>
    `;
    if(isNaN(price)){
        template = "<h3>Please Select a price to see how supply and demand behaves</h3>"
    }
    document.getElementById("result").innerHTML = template
}
