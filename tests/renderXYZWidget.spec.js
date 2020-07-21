import renderXYZwidget from '../src/widgets/renderXYZWidget.js';
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

jest
.dontMock('fs');

describe('renderXYZwidget', function () {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
        renderXYZwidget();
    })
    it('Should render a list of prices per widget', () => {
        expect( document.getElementById('price-input') ).toBeTruthy()
    })
    it("Should display 10 radios", () => {
        expect( document.getElementById('price-input').childElementCount ).toBe(10);
    })
})