import renderApp from '../src/app.js';
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

jest
.dontMock('fs');

describe('renderApp', function () {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })
    it('Should render xyz widget', () => {
        expect(  document.getElementById('xyz-widget') ).toBeTruthy()
    })
})