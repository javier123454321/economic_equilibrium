import { calculateEquilibriumPrice } from '../services/EquilibriumService.js';
import { updatePrice } from './RenderPriceWidget.js';

export function equilibriumPriceButtonWidget(){
    document.getElementById('calculate-equilibrium-button').addEventListener('click', () => updatePrice(calculateEquilibriumPrice()));
    updatePrice(calculateEquilibriumPrice())
}
