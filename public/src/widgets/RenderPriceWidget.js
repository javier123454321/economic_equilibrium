import {toCurrency} from '../services/CurrencyService.js';

export function updateValue(){
    let sliderValue = document.getElementById('price-slider').value;
    document.getElementById('price').value = toCurrency(sliderValue);
};

export function updateSlider(){
    let formValue = document.getElementById('price').value;
    document.getElementById('price-slider').value = parseFloat(formValue * 100);
    document.getElementById('price').value = toCurrency(formValue, false);
}

export function renderPriceWidget(){
    document.getElementById('price-slider').addEventListener('input', updateValue);
    document.getElementById('price').addEventListener('change', updateSlider)
}
