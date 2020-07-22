import renderProductWidget from './widgets/renderProductWidget.js';
import renderSumWidget from './widgets/renderSumWidget.js';
import renderSupplyAndDemandEquations from './widgets/renderSupplyAndDemandWidget.js';
import setupToolTip from './widgets/renderWikipediaInfo.js';

export default function renderApp(){
    renderProductWidget();
    renderSumWidget();
    renderSupplyAndDemandEquations();
    setupToolTip();
};
renderApp();
