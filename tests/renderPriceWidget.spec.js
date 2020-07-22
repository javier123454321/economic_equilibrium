import renderPriceWidget from '../public/src/widgets/RenderPriceWidget.js';
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../public/index.html'), 'utf8');

jest
.dontMock('fs');

describe('renderXYZwidget', function () {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
        renderPriceWidget();
    })
    it('Should render a list of prices per widget', () => {
        expect( document.getElementById('price-input') ).toBeTruthy()
    })
    it("Should display an input slider", () => {
        expect( document.getElementById('price-slider') ).toBeTruthy();
    })
})