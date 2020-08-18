 function calculateSupplyVsDemand(supply, consumption) {
    if (consumption > supply) {
        return `Demand is greater than supply, This would leave consumers with a shortage of 
        <span class='emphasis'> ${Math.floor( consumption - supply)} </span> units. 
        The company would have to either increase price or produce more.`;
    }

    if (consumption <= 0) {
        return "This price is higher than what people are willing to pay, there is excess supply";
    }

    if (Math.floor(supply - consumption) == 0 ) {
        return "This is the equilibrium price";
    }
    return "People will buy some, but there will be <span class='emphasis'>"+Math.floor( supply - consumption ) +"</span> items left over as it is too expensive"
}

 export default function renderSumWidget(){
    calculateOutput();
    
    function calculateOutput() {
        let Mdemand =  parseInt(document.getElementById("demand-input").value);
        let highestPriceConsumersWillPay = parseInt(document.getElementById("higestPrice-input").value);
        let Msupply =  parseInt(document.getElementById("supply-input").value);
        let costToProduceTheItem = parseInt(document.getElementById("cost-input").value);
    
        let consumption;
        let supply;
        let message = "";

        let price = parseFloat(document.getElementById('price').innerHTML);
    
        message = "";
        
        consumption = (price * Mdemand) + highestPriceConsumersWillPay;
        if(consumption < 0){
            consumption = 0
        } 
        supply = (price * Msupply )+ costToProduceTheItem;
    
        message = calculateSupplyVsDemand(supply, consumption);
    
        let revenue = consumption * price;

        let template = `
        <h3>Amount of Products Sold:</h3> 
        ${consumption} per month at $${price} 
        <h4> Yields: </h4>
        Revenue: $${parseFloat(revenue).toFixed(2)} per month
        <p class="output-message">${message}</p>
     `
        if(isNaN(price)){
            template = "<h3>Please Select a price to see how supply and demand behaves</h3>"
        }
        document.getElementById("result").innerHTML = template
    }
}
