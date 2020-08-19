import {renderPriceWidget} from './widgets/RenderPriceWidget.js';
import renderSumWidget from './widgets/RenderSumWidget.js';
import setupToolTip from './widgets/RenderWikipediaInfo.js';
import calculateEquilibriumPrice from './widgets/EquilibriumService.js';

export default function renderApp(){
    renderPriceWidget();
    renderSumWidget();
    setupToolTip();
    calculateEquilibriumPrice();
};
renderApp();
