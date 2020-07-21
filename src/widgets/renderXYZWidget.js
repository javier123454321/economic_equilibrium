function radioButtons(){
    let radioButtons = "";
    for(let i = 1; i <= 10; i++){
        radioButtons += '<input type="radio" name="price" value=' + i + '> $' + i +"\n";
    }
    return radioButtons;
}
export default function renderXYZwidget(){
    let template = `
        Price for XYZ Widget:
        <div id="price-input">
            ${ radioButtons() }
        </div>`
    document.getElementById('xyz-widget').innerHTML = template;
}

