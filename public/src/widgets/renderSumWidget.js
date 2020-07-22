 function calculateSupplyVsDemand(supply, consumption) {
    if (consumption > supply) {
        return `Demand is greater than supply, This would leave consumers with a shortage of 
        <span class='emphasis'> ${consumption - supply} </span> units. 
        The company would have to either increase price or produce more.`;
    }

    if (consumption <= 0) {
        return "This price is higher than what people are willing to pay, there is excess supply";
    }

    if (consumption == supply) {
        return "This is the equilibrium price";
    }
    return "People will buy some, but there will be <span class='emphasis'>"+( supply - consumption ) +"</span> items left over as it is too expensive"
}

 export default function renderSumWidget(){
    
    document.getElementById("calculate").addEventListener("click", calculateOutput);
    
    function calculateOutput() {
        let Mdemand =  parseInt(document.getElementById("demand-input").value);
        let highestPriceConsumersWillPay = parseInt(document.getElementById("higestPrice-input").value);
        let Msupply =  parseInt(document.getElementById("supply-input").value);
        let costToProduceTheItem = parseInt(document.getElementById("cost-input").value);
    
        let consumption;
        let supply;
        let message = "";

        let price;
        let priceOptions = document.getElementsByName("price");
    
        message = "";
        
        for (let i = 0; i < priceOptions.length; i++) {
            if (priceOptions[i].checked) {
                price = priceOptions[i].value;
                break;
            }
        }
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
        Revenue: $${revenue} per month
        <p class="output-message">${message}</p>
     `
        if(isNaN(price)){
            template = "<h3>Please Select a price to see how supply and demand behaves</h3>"
        }
        document.getElementById("result").innerHTML = template
    }
}
