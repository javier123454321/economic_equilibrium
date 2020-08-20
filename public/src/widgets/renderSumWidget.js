 import { toCurrency } from '../services/CurrencyService.js';
 import { getEquilibriumOutputFromDOM } from '../services/EquilibriumService.js';

 function calculateStringOutput(equilibriumInformation) {
    if ( Math.abs(equilibriumInformation.supply - equilibriumInformation.consumption) <= 1 ) {
        return `
        <h2>$${ equilibriumInformation.price } is the equilibrium price</h2> 
        <h4>Revenue: $${ toCurrency( equilibriumInformation.revenue, false ) } per month</h4>
        <h4>Products sold at this price: ${Math.floor( equilibriumInformation.consumption )} units</h4>
        <h4>Change the price to see how the market behaves with fluctuations</h4>
        `;
    }

    if (equilibriumInformation.consumption > equilibriumInformation.supply) {
        return `
        <h3>Price is too low at $${ equilibriumInformation.price }</h3>
        <h4>Revenue: $${ toCurrency(equilibriumInformation.revenue, false) } per month</h4>
        <h4>Products sold at this price: ${ Math.floor(equilibriumInformation.consumption) } units</h4>
        This would leave consumers with a shortage of 
        <span class='emphasis'> ${ Math.floor( equilibriumInformation.consumption - equilibriumInformation.supply ) } </span> units. 
        The company would have to either increase price or produce more.`;
    }

    if (equilibriumInformation.consumption <= 0) {
        return `
        <h3>Price is Too High at $${equilibriumInformation.price}</h3>
        No one will buy at this price`;
    }
    return `
    <h3>$${equilibriumInformation.price} is too expensive</h3> 
    <h4>Revenue: $${ toCurrency( equilibriumInformation.revenue, false ) } per month</h4>
    <h4>Products sold at this price: ${Math.floor(equilibriumInformation.consumption)} units</h4>
    People will buy some, but there will be <span class='emphasis'>${ Math.floor( equilibriumInformation.supply - equilibriumInformation.consumption ) }</span> items left over as it is too expensive`
}

function renderOutput(equilibriumInformation) {
    let message = calculateStringOutput(equilibriumInformation);

    let template = `
    <div class="output-message">
        ${message}
    </div>
    `;
    if (isNaN(equilibriumInformation.price)) {
        template = "<h3>Please Select a price to see how supply and demand behaves</h3>";
    }
    document.getElementById("result").innerHTML = template;
}

 export default function renderSumWidget(){
    let output = getEquilibriumOutputFromDOM();
    renderOutput(output);
}

