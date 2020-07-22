import renderProductWidget from '../public/src/widgets/renderProductWidget.js';
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../public/index.html'), 'utf8');

jest
.dontMock('fs');

describe('renderXYZwidget', function () {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
        renderProductWidget();
    })
    it('Should render a list of prices per widget', () => {
        expect( document.getElementById('price-input') ).toBeTruthy()
    })
    it("Should display 10 radios", () => {
        expect( document.getElementById('price-input').childElementCount ).toBe(10);
    })
})