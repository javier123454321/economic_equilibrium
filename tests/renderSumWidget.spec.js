import renderSumWidget from '../public/src/widgets/RenderSumWidget.js';
import { updatePrice } from '../public/src/widgets/RenderPriceWidget.js';

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
        renderSumWidget();
    })

    beforeAll(() => {
        global.functionPlot = () => {}
    })

    it('Should display an the economic equilibrium when loading the page', () => {
        updatePrice(20)
        expect( document.getElementsByClassName('output-message')[0].querySelector('h2').textContent ).toBe(`$20.00 is the equilibrium price`);
        }
    );

    it('Should update when the price is updated', () => {
        updatePrice(0.01);
        expect( document.getElementById('result').querySelector('h3').textContent ).toBe("Price is too low at $0.01");
    })

    it('Should render descriptive errors when not in equilibrium', () => {
        updatePrice(8);
        expect( document.getElementById('result').querySelector('h3').textContent ).toBe("Price is too low at $8.00");
    })
})
