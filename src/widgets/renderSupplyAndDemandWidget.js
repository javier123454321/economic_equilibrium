function bindToMainForm(){
    document.getElementById('main-form').addEventListener('keyup', renderSupplyAndDemandEquations);
}

export default function renderSupplyAndDemandEquations(){
    let Mdemand =  parseInt(document.getElementById("demand-input").value);
    let highestPriceConsumersWillPay = parseInt(document.getElementById("higestPrice-input").value);
    let Msupply =  parseInt(document.getElementById("supply-input").value);
    let costToProduceTheItem = parseInt(document.getElementById("cost-input").value);
    let equationOutputNode = document.getElementById('current-equations')

    let supplyEquationTemplate = `
    <div class="sample-equation">
        <span class"emphasis">Supply Equation:</span> 
        Qs = ${Msupply}(P) + ${costToProduceTheItem}
    </div>`;

    let demandEquationTemplate = `
    <div class="sample-equation">
        <span class"emphasis">Demand Equation:</span> 
        Qd = ${Mdemand}(P) + ${highestPriceConsumersWillPay}
    </div>`;

    equationOutputNode.innerHTML = supplyEquationTemplate + demandEquationTemplate
    bindToMainForm();  
}
