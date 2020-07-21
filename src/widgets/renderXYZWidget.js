function radioButtons(){
    let radioButtons = "";
    for(let i = 1; i <= 10; i++){
        radioButtons += '<input type="radio" name="price" value=' + i + '> $' + i +"\n";
    }
    return radioButtons;
}
export default function renderXYZwidget(){
    let template = `
        <h3>Price for XYZ Widget:</h3>
        <div id="price-input">
            ${ radioButtons() }
        </div>`
    document.getElementById('xyz-widget').innerHTML = template;
}

