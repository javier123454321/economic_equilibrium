import { renderPriceWidget } from './widgets/RenderPriceWidget.js';
import setupToolTip from './widgets/RenderWikipediaInfo.js';
import { calculateEquilibriumPrice } from './services/EquilibriumService.js';
import equationsWidget from './widgets/EquationsWidget.js';

export default function renderApp(){
    renderPriceWidget();
    setupToolTip();
    calculateEquilibriumPrice();
    equationsWidget();
};
renderApp();
