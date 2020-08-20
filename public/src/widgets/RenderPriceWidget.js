import {toCurrency} from '../services/CurrencyService.js';
import RenderResultsWidget from './RenderResultsWidget.js';

export function updateValue(){
    let sliderValue = document.getElementById('price-slider').value;
    updatePrice( toCurrency(sliderValue) );
};

export function updateSlider(){
    let formValue = document.getElementById('price').value;
    updatePrice( toCurrency(formValue, false) );
}

export function updatePrice(priceToUpdate){
    document.getElementById('price-slider').value = priceToUpdate * 100
    document.getElementById('price').value = priceToUpdate
    RenderResultsWidget();
}

export function renderPriceWidget(){
    document.getElementById('price-slider').addEventListener('input', updateValue);
    document.getElementById('price').addEventListener('change', updateSlider)
}