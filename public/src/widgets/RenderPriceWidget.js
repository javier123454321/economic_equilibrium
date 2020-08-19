import {toCurrency} from '../services/CurrencyService.js';
import renderSumWidget from './renderSumWidget.js';

export function updateValue(){
    let sliderValue = document.getElementById('price-slider').value;
    document.getElementById('price').value = toCurrency(sliderValue);
    renderSumWidget();
};

export function updateSlider(){
    let formValue = document.getElementById('price').value;
    document.getElementById('price-slider').value = parseFloat(formValue * 100);
    document.getElementById('price').value = toCurrency(formValue, false);
    renderSumWidget();
}

export function updatePrice(priceToUpdate){
    document.getElementById('price-slider').value = priceToUpdate * 100
    document.getElementById('price').value = priceToUpdate
    renderSumWidget();
}

export function renderPriceWidget(){
    document.getElementById('price-slider').addEventListener('input', updateValue);
    document.getElementById('price').addEventListener('change', updateSlider)
}