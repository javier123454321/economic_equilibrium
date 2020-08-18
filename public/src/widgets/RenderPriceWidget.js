import {toCurrency} from '../services/CurrencyService.js';

function updateValue(){
    let sliderValue = document.getElementById('price-slider').value;
    document.getElementById('price').value = toCurrency(sliderValue);
};

function updateSlider(){
    let formValue = document.getElementById('price').value;
    document.getElementById('price-slider').value = parseFloat(formValue * 100);
    console.log(formValue);
    document.getElementById('price').value = toCurrency(formValue, false);
}

export default function renderPriceWidget(){
    document.getElementById('price-slider').addEventListener('input', updateValue);
    document.getElementById('price').addEventListener('change', updateSlider)
}
