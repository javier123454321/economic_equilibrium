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
            message = "ABC Company canot make enough XYZ Widgets";
        }
    
        if (consumption <= 0) {
            consumption = 0;
            message = "No one will buy XYZ Widgets at this price";
        }

        if (isMaxRevenue(Msupply, Mdemand, Bsupply, Bdemand, price)) {
            message = "This is the equilibrium price"
        }
    
        let revenue = consumption * price;
    
        document.getElementById("result").innerHTML = "XYZ Widgets sold:"+consumption+"/month<br>Revenue:"+revenue+"/month<br><br>"+message;
    }
}