import renderSumWidget from '../public/src/widgets/RenderSumWidget.js'
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../public/index.html'), 'utf8');

jest
.dontMock('fs');

function renderInput(price){
    let output = '<input id="price-slider" class="slider" type="range" min="1.00" max="10000" value="' + parseFloat( price * 100 ) + '"></input>'
    output += '<div id="current-price"><span id="price">' + price + '</span></div>';
    return output
}

describe('renderSumWidget', function() {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
        document.getElementById('xyz-widget').innerHTML = renderInput("4.00");
        renderSumWidget();
    })
    it('Should be blank before a user submits an input', () => {
        expect( document.getElementById('result').textContent ).toBe("");
        expect( document.getElementById('result').querySelector('p') ).toBeFalsy();
        }
    );
    it('Should render an output when a user selects an input', () => {
        document.getElementById("calculate").click();
        expect( document.getElementById('result').querySelector('h3').textContent ).toBe("Amount of Products Sold:");
    })
    it('Should render the success message when equilibrium is reached, and descriptive errors when not', () => {
        document.getElementById("calculate").click();
        expect( document.getElementById('result').querySelectorAll('p.output-message')[0].textContent ).toBe("This is the equilibrium price");
        
        document.getElementById('xyz-widget').innerHTML = renderInput("30");
        document.getElementById("calculate").click();
        expect( document.getElementById('result').querySelectorAll('p.output-message')[0].textContent ).toBe("This price is higher than what people are willing to pay, there is excess supply");
        
        document.getElementById('xyz-widget').innerHTML = renderInput("3");
        document.getElementById("calculate").click();
        expect( document.getElementById('result').querySelectorAll('p.output-message')[0].textContent.substr(0, 30) ).toBe("Demand is greater than supply,");

        document.getElementById('xyz-widget').innerHTML = renderInput("4.50");
        document.getElementById("calculate").click();
        expect( document.getElementById('result').querySelectorAll('p.output-message')[0].textContent.substr(0, 39) ).toBe("People will buy some, but there will be");
    })
})
