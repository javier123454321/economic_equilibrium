
// Equilibrium Price Equations:
//   Qsupply = Msupply * price + Bsupply
//   Qdemand = Mdemand * price + Bdemand

var Mdemand = -1000;
var Bdemand = 10000;
var Msupply = 0; // what if ABC can hire more people when price goes up? 
var Bsupply = 8000;
var consumption;
var supply;
var message;

document.getElementById("calculate").addEventListener("click", calculateOutput);

function calculateOutput() {
    var price;
    var priceOptions = document.getElementsByName("price");

    message = "";

    for (var i = 1; i < priceOptions.length; i++) {
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

    /*
    if (maxRevenue) {
        message = "This is the equilibrium price"
    }
    */

    revenue = consumption * price;

    document.getElementById("result").innerHTML = "XYZ Widgets sold:"+consumption+"/month<br>Revenue:"+revenue+"/month<br><br>"+message;
}
