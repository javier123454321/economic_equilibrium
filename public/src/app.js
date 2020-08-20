import { renderPriceWidget } from './widgets/RenderPriceWidget.js';
import setupToolTip from './widgets/RenderWikipediaInfo.js';
import { equilibriumPriceButtonWidget } from './widgets/EquilibriumPriceButtonWidget.js';
import equationsWidget from './widgets/EquationsWidget.js';

export default function renderApp(){
    renderPriceWidget();
    setupToolTip();
    equilibriumPriceButtonWidget();
    equationsWidget();
};
renderApp();
