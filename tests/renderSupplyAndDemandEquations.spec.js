import renderSupplyAndDemandEquations from '../public/src/widgets/renderSupplyAndDemandWidget.js'
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../public/index.html'), 'utf8');

jest
.dontMock('fs');

describe('renderSumWidget', function() {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
        renderSupplyAndDemandEquations();
    })
    it('Should render an equation based on the user input', () => {
        expect( document.getElementsByClassName('sample-equation')[0].textContent ).not.toBe("Supply Equation: Qs = 0(P) + 8000"); 
        expect( document.getElementsByClassName('sample-equation')[0].textContent ).not.toBe("Demand Equation: Qd = -500(P) + 10000");
        }
    );
    it('Should update the equations dynamically when a new value is typed', () => {
        document.getElementById("cost-input").value = 9000;
        //cannot really simulate a keyup event, so will just rerender manually
        renderSupplyAndDemandEquations()
        expect( document.getElementsByClassName('sample-equation')[0].textContent ).not.toBe("Supply Equation: Qs = 0(P) + 9000"); 
    })
})
