import {renderPriceWidget, updateValue, updateSlider } from '../public/src/widgets/RenderPriceWidget.js';
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../public/index.html'), 'utf8');

jest
.dontMock('fs');
const functionPlot = jest.mock();

describe('RenderPriceWidget', function () {
    beforeAll(() => {
        global.functionPlot = () => {}
    })
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
        renderPriceWidget();
    })
    it("Should display an input slider and an input box", () => {
        expect( document.getElementById('price-slider') ).toBeTruthy();
        expect( document.getElementById('price') ).toBeTruthy();
    })
    it("Should update the slider when the input box is updated", () => {
        expect(document.getElementById('price-slider').value).toBe("600");
        expect( document.getElementById('price').value ).toBe("6.00");
        document.getElementById('price').value = "7.00";
        updateSlider()
        expect( document.getElementById('price-slider').value ).toBe("700");
    })
    it("Should update the input box when the slider is updated", () => {
        expect(document.getElementById('price-slider').value).toBe("600");
        expect( document.getElementById('price').value ).toBe("6.00");
        document.getElementById('price-slider').value = "700";
        updateValue()
        expect( document.getElementById('price').value ).toBe("7.00");
    })
})