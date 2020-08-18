
function slider(){
    return `
    <input id="price-slider" class="slider" type="range" min="1.00" max="10000" value="400">
    <div id="current-price"></div>
    `;
}
function renderValue(){
    function toCurrency(valueInCents){
        let value = valueInCents/100;
        let output = String(value).split(".");
        if (output.length == 1){
            output[1] = "00";
        } else if (output[1].length == 1){
            output[1] += "0"
        }
        return output.join(".")
    }

    let sliderValue = document.getElementById('price-slider').value;

    document.getElementById("current-price").innerHTML = `Price: $<span id="price">${toCurrency(sliderValue)}</span>`
};
export default function renderPriceWidget(){
    let template = `
        <div id="price-input">
            ${ slider() }
        </div>`
    document.getElementById('xyz-widget').innerHTML = template;
    renderValue()
    document.getElementById('price-slider').addEventListener('change', renderValue);
}
