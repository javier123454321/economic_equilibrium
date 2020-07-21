 function isMaxRevenue(Msupply, Mdemand, Bsupply, Bdemand, price){
    let Qsupply = Msupply * price + Bsupply
    let Qdemand = Mdemand * price + Bdemand
    return Qsupply == Qdemand;
 }
 
 export default function renderSumWidget(){
    let Mdemand = -500;
    let Bdemand = 10000;
    let Msupply = 0; // what if ABC can hire more people when price goes up?
    let Bsupply = 8000;
    let consumption;
    let supply;
    let message;
    
    document.getElementById("calculate").addEventListener("click", calculateOutput);
    
    function calculateOutput() {
        let price;
        let priceOptions = document.getElementsByName("price");
    
        message = "";
    
        for (let i = 0; i < priceOptions.length; i++) {
            if (priceOptions[i].checked) {
                price = priceOptions[i].value;
                break;
            }
        }
        
        consumption = price * Mdemand + Bdemand;
        supply = price * Msupply + Bsupply;
    
        if (consumption > supply) {
            consumption = supply;
            message = "Demand is greater than supply, the company would have to either increase price or produce more.";
        }
    
        if (consumption <= 0) {
            consumption = 0;
            message = "This price is higher than what people are willing to pay";
        }

        if (isMaxRevenue(Msupply, Mdemand, Bsupply, Bdemand, price)) {
            message = "This is the <a href='https://en.wikipedia.org/wiki/Economic_equilibrium'>equilibrium price</a>"
        }
    
        let revenue = consumption * price;

        let template = `
        <h3>Amount of Products Sold:</h3> 
        ${consumption} per month at $${price} 
        <h4> Yields: </h4>
        Revenue: $${revenue} per month
        <h4>${message}</h4>
     `
    
        document.getElementById("result").innerHTML = template
    }
}