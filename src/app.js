export default function renderApp(){
    function renderXYZwidget(){
        let widgetContent = `
            Price for XYZ Widget:
            <input type="radio" name="price" value=1> $1
            <input type="radio" name="price" value=2> $2
            <input type="radio" name="price" value=3> $3
            <input type="radio" name="price" value=4> $4
            <input type="radio" name="price" value=5> $5
            <input type="radio" name="price" value=6> $6
            <input type="radio" name="price" value=7> $7
            <input type="radio" name="price" value=8> $8
            <input type="radio" name="price" value=9> $9
            <input type="radio" name="price" value=10> $10`
        return widgetContent
    }
    
    document.getElementById('xyz-widget').innerHTML += renderXYZwidget()
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
};
