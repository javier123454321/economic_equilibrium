import renderSumWidget from '../src/widgets/renderSumWidget.js'
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

jest
.dontMock('fs');

function renderInput(i, id){
    return `
    <input type="radio" name="price" id='${id}' value='${i}'> $${i}
    `;
}
function logHTMLStringfromDocument(document){
    console.log(new XMLSerializer().serializeToString(document));
}

describe('renderSumWidget', function() {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
        document.getElementById('xyz-widget').innerHTML = renderInput(2, 'testRadio');
        renderSumWidget();
    })
    it('Should be blank before a user submits an input', () => {
        expect( document.getElementById('result').textContent ).toBe("");
        }
    );
    it('Should render an output when a user selects an input', () => {
        document.getElementById('testRadio').click();
        document.getElementById("calculate").click();
        
        expect( document.getElementById('result').querySelector('h3').textContent ).toBe("XYZ Widgets sold:");
    })
    it('Should render the success message when equilibrium is reached', () => {

        expect( document.getElementById('result').querySelector('h4') ).toBeFalsy();

        document.getElementById('xyz-widget').innerHTML += renderInput(4, 'equilibriumInput');
        document.getElementById('equilibriumInput').click();
        document.getElementById("calculate").click();

        expect( document.getElementById('result').querySelector('h4').textContent ).toBe("This is the equilibrium price");
    })
})
