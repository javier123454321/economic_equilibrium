import { toCurrency } from './CurrencyService.js';

export function calculateEquilibriumPrice(){
    let Mdemand =  parseInt(document.getElementById("demand-input").value);
    let highestPriceConsumersWillPay = parseInt(document.getElementById("higestPrice-input").value);
    let Msupply =  parseInt(document.getElementById("supply-input").value);
    let costToProduceTheItem = parseInt(document.getElementById("cost-input").value);

    let equilibriumPrice = toCurrency(( highestPriceConsumersWillPay - costToProduceTheItem )/ (Msupply - Mdemand), false);
    return equilibriumPrice
}

export function getEquilibriumOutputFromDOM() {
    let Mdemand = parseInt(document.getElementById("demand-input").value);
    let highestPriceConsumersWillPay = parseInt(document.getElementById("higestPrice-input").value);
    let Msupply = parseInt(document.getElementById("supply-input").value);
    let costToProduceTheItem = parseInt(document.getElementById("cost-input").value);

    let consumption;
    let supply;

    let price = toCurrency(document.getElementById('price').value, false);

    consumption = (price * Mdemand) + highestPriceConsumersWillPay;
    if (consumption < 0) {
        consumption = 0;
    }
    supply = (price * Msupply) + costToProduceTheItem;
    let excessSupply = (supply > consumption ? Math.floor(supply - consumption) : 0);
    let revenue = consumption * price - (costToProduceTheItem * excessSupply);
    return { 
        "supply": supply, 
        "consumption": consumption, 
        "price": price, 
        "revenue":revenue,
        "mDemand" : Mdemand,
        "bDemand" : highestPriceConsumersWillPay,
        "mSupply": Msupply,
        "bSupply": costToProduceTheItem,
        "equilibriumPrice": calculateEquilibriumPrice()
    };
}