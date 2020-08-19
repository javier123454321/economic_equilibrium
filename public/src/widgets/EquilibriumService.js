import { updatePrice } from './RenderPriceWidget.js';
import { toCurrency } from '../services/CurrencyService.js';

function bindCalculateToButton(){
    document.getElementById('calculate-equilibrium-button').addEventListener('click', calculateEquilibriumPrice)
}

export default function calculateEquilibriumPrice(){
    let Mdemand =  parseInt(document.getElementById("demand-input").value);
    let highestPriceConsumersWillPay = parseInt(document.getElementById("higestPrice-input").value);
    let Msupply =  parseInt(document.getElementById("supply-input").value);
    let costToProduceTheItem = parseInt(document.getElementById("cost-input").value);

    let equilibriumPrice = toCurrency(( highestPriceConsumersWillPay - costToProduceTheItem )/ (Msupply - Mdemand), false);
    updatePrice(equilibriumPrice);
    bindCalculateToButton()
    return equilibriumPrice
}