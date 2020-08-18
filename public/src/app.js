import {renderPriceWidget} from './widgets/RenderPriceWidget.js';
import renderSumWidget from './widgets/RenderSumWidget.js';
import renderSupplyAndDemandEquations from './widgets/RenderSupplyAndDemandWidget.js';
import setupToolTip from './widgets/RenderWikipediaInfo.js';

export default function renderApp(){
    renderPriceWidget();
    renderSumWidget();
    renderSupplyAndDemandEquations();
    setupToolTip();
};
renderApp();
